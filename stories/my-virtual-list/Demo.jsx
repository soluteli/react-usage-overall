
import React from 'react'
import MyVirtualList from './MyVirtualList'

function DemoFixed(params) {
  
  const listData = Array.from({
    length: 1000
  }).map((_item, i) => ({
    label: i
  }))

  function ItemComp(item, index) {
    return (<div key={index} style={{height: '30px'}}>
      label: {item.data.label}
    </div>)
  }

  return (<MyVirtualList ref={r => {
    window.virtualRef = r
  }} list={listData} itemHeight={30} style={{width: '200px', height: '400px'}}>
    {ItemComp}
  </MyVirtualList>)
}

export default DemoFixed