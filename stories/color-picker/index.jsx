import React from 'react'

// http://react-component.github.io/color-picker/
const ColorPicker = require('rc-color-picker');
import 'rc-color-picker/assets/index.css';

function CPick() {
  return (
    <div style={{
      width: '50px',
      height: '50px',
      // background: 'red'
    }}>
      <ColorPicker />
    </div>
  )
}

export default CPick
