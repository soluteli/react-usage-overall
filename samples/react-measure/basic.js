import React, { Component } from 'react';

import Measure from 'react-measure'
import classNames from 'classnames'

export default class ItemToMeasure extends Component {
  state = {
    dimensions: {
      width: -1,
      height: -1,
    },
  }

  render() {
    const { width, height } = this.state.dimensions
    const className = classNames(width < 400 && 'small-width-modifier')

    return (
      <Measure
        bounds
        onResize={contentRect => {
          console.log('onresize', contentRect)
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} className={className}>
            I can do cool things with my dimensions now :D
            {height > 250 && (
              <div>Render responsive content based on the component size!</div>
            )}
          </div>
        )}
      </Measure>
    )
  }
}