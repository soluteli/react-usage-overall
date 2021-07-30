import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider, useDrag } from 'react-dnd'

const treeData = [
  {
    id: '1',
    label: '1'
  },
  {
    id: '2',
    label: '2',
    children: [
      {
        id: '2-1',
        label: '2-1'
      },
      {
        id: '2-2',
        label: '2-2'
      }
    ]
  }
]

const DRAG_TYPE = 'DRAG_TYPE'

const TreeNode = (props) => {
  const { id, label, children } = props.data

  const [collected, drag, dragPreview] = useDrag(() =>{
    return {
      type: DRAG_TYPE,
      item: { id },
      collect: (monitor) => {
        console.log('monitor', monitor)
        return {
          isDragging: monitor.isDragging()
        }
      }
    }
  })

  console.log('collected', collected.isDragging)

  return (
    <div className="tree-node">
      <p className="tree-node_label"
        ref={drag}
        >{label}</p>
      <div className="tree-node_children">
        {
          children && children.map(item => {
            return <TreeNode key={item.id} data={item}  />
          })
        }
      </div>
    </div>
  )
}

function Tree (props) {
  const { data } = props
  return (
    <div className="tree">
      <DndProvider backend={HTML5Backend}>
        {data.map(item => {
          return <TreeNode key={item.id} data={item}></TreeNode>
        })}
      </DndProvider>
    </div>
  )
}

export default function DraggableTree() {
  return (
    <div>
      <Tree data={treeData} />
    </div>
  )
}
