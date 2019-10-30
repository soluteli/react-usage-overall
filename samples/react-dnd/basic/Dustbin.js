import React, {Component} from 'react'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'
const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}

const spec = {
  drop (props, monitor, component) {
    return {
      name: 'Dustbin'
    }
  },
  hover(props, monitor, component) {
    console.log('hover')
  }
}

function collecting(connect, monitor, props) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

class Dustbin extends Component {
  render () {
    let { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }
    return connectDropTarget(
      <div style={Object.assign({}, style, { backgroundColor })}>
        {isActive ? 'Release to drop' : 'Drag a box here'}
      </div>
    )
  }
}

export default DropTarget(ItemTypes.BOX, spec, collecting)(Dustbin)

