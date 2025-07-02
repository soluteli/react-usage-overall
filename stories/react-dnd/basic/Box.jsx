import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

const spec = {
  beginDrag(props, monitor, component) {
    console.log('beginDrag')
    return {
      name: props.name
    }
  },
  endDrag(props, monitor, component) {
    console.log('endDrag')
  },
  isDragging(props, monitor) {
    console.log('isDragging')
  }
}

function connecting(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Box extends Component {
  render () {
    let { connectDragSource, name } = this.props
    const opacity = this.props.isDragging ? 0.4 : 1
    return connectDragSource(
      <div style={Object.assign({}, style, { opacity })}>
        {name}
      </div>
    )
  }
}

export default DragSource(ItemTypes.BOX, spec, connecting)(Box)

