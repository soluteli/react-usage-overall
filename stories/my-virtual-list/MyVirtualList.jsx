import React, {Component} from 'react'
import SuperSelect from '../antd/select/virtual-select'

export default class MyVirtualList extends Component {

  state = {
    start: 0,
    end: 0
  }

  totalHeight = 0

  lastContainerWidth = 0
  lastContainerheight = 0

  constructor (...args) {
    super(...args)
    this.totalHeight = this.getTotalHeight()
  }

  componentDidMount() {
    const curContainerWidth = this.containerRef.offsetWidth
    const curContainerHeight = this.containerRef.offsetHeight
    this.calculateRange()
    this.lastContainerWidth = curContainerWidth
    this.lastContainerheight = curContainerHeight
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.list.length !== this.props.list.length) {
      totalHeight = this.getTotalHeight()
      this.calculateRange()
    }

    const curContainerWidth = this.containerRef.offsetWidth
    const curContainerHeight = this.containerRef.offsetHeight
    if (curContainerWidth !== this.lastContainerWidth || curContainerHeight !== this.lastContainerheight) {
      this.calculateRange()
      this.lastContainerWidth = curContainerWidth
      this.lastContainerheight = curContainerHeight
    }
  }
  

  // 获取 div 类能容纳的 item 数量
  getViewCapacity = (containerHeight) => {
    const { itemHeight } = this.props
    if (typeof itemHeight === 'number') {
      return Math.ceil(containerHeight / itemHeight);
    }
    const { start = 0 } = this.state;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < list.length; i++) {
      const height = itemHeight(i)
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };

  // 获取当前应该展示第几个 item
  getOffset = (scrollTop) => {
    const { itemHeight } = this.props
    if (typeof itemHeight === 'number') {
      return Math.floor(scrollTop / itemHeight) + 1;
    }
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < list.length; i++) {
      const height = itemHeight(i)
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };

  // 计算当前展示的 item 范围
  calculateRange = () => {
    const { overscan = 5, list } = this.props
    const element = this.containerRef;
    if (element) {
      const offset = this.getOffset(element.scrollTop);
      const viewCapacity = this.getViewCapacity(element.clientHeight);

      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      this.setState({
        start: from < 0 ? 0 : from,
        end: to > list.length ? list.length : to,
      });
    }
  };

  // 计算所有子元素渲染完成的所有高度
  getTotalHeight = () => {
    const {list, itemHeight} = this.props
    if (typeof itemHeight === 'number') {
      return list.length * itemHeight;
    }
    return list.reduce((sum, _, index) => sum + itemHeight(index), 0);
  }

  // 获取当前距离 index 为 0 的高度
  getDistanceTop = (index) => {
    const {list, itemHeight}= this.props
    // 如果有缓存，优先返回缓存值
    // if (enableCache && distanceCache.current[index]) {
    //   return distanceCache.current[index];
    // }
    if (typeof itemHeight === 'number') {
      const height = index * itemHeight;
      // if (enableCache) {
      //   distanceCache.current[index] = height;
      // }
      return height;
    }
    const height = list.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
    // if (enableCache) {
    //   distanceCache.current[index] = height;
    // }
    return height;
  };

  scrollTo = (index) => {
    if (this.containerRef) {
      this.containerRef.scrollTop = this.getDistanceTop(index);
      this.calculateRange();
    }
  };

  handleScroll = (e) => {
    e.preventDefault();
    this.calculateRange();
  }
  
  render () {
    const { className, children, list, style = {} } = this.props
    const { start, end } = this.state
    const offsetTop = this.getDistanceTop(start);
    const totalHeight = this.totalHeight

    const listToRender = list.slice(start, end).map((ele, index) => ({
      data: ele,
      index: index + start,
    }))

    return (
      <div className="container" ref={r => this.containerRef = r} style={{...style, overflowY: 'auto'}}
        onScroll={this.handleScroll}
      >
        <div className="inner-wrapper" style={{
          width: '100%',
          height: totalHeight - offsetTop,
          marginTop: offsetTop,
        }}>
          {listToRender.map((item, _i) => children(item, _i))}
        </div>
      </div>
    )
  }
}