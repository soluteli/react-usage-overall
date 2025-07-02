import React from 'react'
import Select from "./virtual-select";

const Option = Select.Option

const data = Array.from({length: 300}, (_v, index) => ({
  name: `name-${index}`,
  value: `value-${index}`,
}))

export default function Virtual () {
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
// export default function Virtual () {
//   return (
//     <Select style={{width: '100px'}}
//       dropdownRender={(menu, props) => {
//         return (
//           <div>
//             sdkdjsj
//           </div>
//         )
//       }}
//     >
//       {/* {
//         data.map(v => (
//           <Option key={v.value} title={v.name} >
//             {v.name}
//           </Option>
//         ))
//       } */}
//     </Select>
//   )
// }