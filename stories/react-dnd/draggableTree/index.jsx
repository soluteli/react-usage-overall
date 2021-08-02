import React, {useRef, useEffect} from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import cz from "classnames";
import './style.css'
import { useTreeNodeDrop } from './useTreeNodeDrop';

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
        // console.log('monitor', monitor)
        return {
          isDragging: monitor.isDragging(),
          // startPointer: monitor.getInitialClientOffset(),
          // startRect: monitor.getInitialSourceClientOffset(),
          // latestPointer: monitor.getClientOffset(),
          // deltaPointer: monitor.getDifferenceFromInitialOffset(),
          // deltaRect: monitor.getSourceClientOffset()
        }
      }
    }
  })

  const doUnshiftDrop = (item) => {
    console.log('doUnshiftDrop', item, id)
  }
  const doPushDrop = (item) => {
    console.log('doPushDrop', item, id)
  }
  const doAppendDrop = (item) => {
    console.log('doAppendDrop', item, id)
  }
  
  
  const [, dropTopRef, dropTopOver] = useTreeNodeDrop(id, doUnshiftDrop)
  const [, dropContentRef, dropContentOver] = useTreeNodeDrop(id, doPushDrop)
  const [, dropBottomRef, dropBottomOver] = useTreeNodeDrop(id, doAppendDrop)


  return (
    <div className="tree-node">
      <div className="tree-node_container">
        <div ref={dropContentRef} className={cz({
          'active': dropContentOver
        })}>
          <p className="tree-node_label"
            ref={drag}
            >{label}</p>
        </div>
        <div className={cz("tree-node_top", {
          active: dropTopOver
        })} ref={dropTopRef}></div>
        <div className={cz("tree-node_bottom", {
          active: dropBottomOver
        })} ref={dropBottomRef}></div>
      </div>
      {
        children && children.length && 
        <div className="tree-node_children">
          {
            children.map(item => {
              return <TreeNode key={item.id} data={item}  />
            })
          }
        </div>
      }
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
