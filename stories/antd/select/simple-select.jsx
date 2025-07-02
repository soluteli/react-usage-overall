import React from 'react'
import { Select } from "antd";

const Option = Select.Option

const data = Array.from({length: 30}, (_v, index) => ({
  name: `name-${index}`,
  value: `value-${index}`,
}))

export default function Virtual () {
  console.log(data)
  return (
    <Select style={{width: '100px'}}>
      {
        data.map(v => (
          <Option key={v.value} title={v.name} >
            {v.name}
          </Option>
        ))
      }
    </Select>
  )
}