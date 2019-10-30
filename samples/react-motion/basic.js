import React, { Component } from 'react';

import { Motion, spring } from 'react-motion';


class BaisicMotionSample extends Component {
  render () {
    return (
    <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
      {value => <div>{value.x}</div>}
    </Motion>
  )
  }
}

export default BaisicMotionSample;