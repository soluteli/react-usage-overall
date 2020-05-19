import React, { Component } from 'react';

import { StaggeredMotion, spring } from 'react-motion';


class StaggeredMotionSample extends Component {
  render () {
    return (
    <StaggeredMotion
      defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
      styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
        return i === 0
          ? {h: spring(100)}
          : {h: spring(prevInterpolatedStyles[i - 1].h)}
      })}>
      {interpolatingStyles =>
        <div>
          {interpolatingStyles.map((style, i) =>
            <div key={i} style={{border: '1px solid', height: style.h}} />)
          }
        </div>
      }
    </StaggeredMotion>
  )
  }
}

export default StaggeredMotionSample;