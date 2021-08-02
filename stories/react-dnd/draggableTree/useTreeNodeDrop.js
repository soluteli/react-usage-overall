import { useDrop } from 'react-dnd'
const DRAG_TYPE = 'DRAG_TYPE'
export function useTreeNodeDrop (id, doDrop = f => f) {
  const [dropCollected, drop] = useDrop(() =>{
    return {
      accept: DRAG_TYPE,
      item: { id },
      canDrop(item, monitor) {
        return item.id !== id
      },
      drop(item, monitor) {
        doDrop(item, monitor)
      },
      collect: (monitor) => {
        return {
          isOver: monitor.isOver(),
          item: monitor.getItem(),
        }
      }
    }
  })

  const isSelf = dropCollected?.item?.id === id
  const isTrueOver = !isSelf && dropCollected?.isOver

  return [dropCollected, drop, isTrueOver]
}