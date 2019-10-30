import React, { Component } from 'react';

import { TransitionMotion, spring } from 'react-motion';


class TransitionMotionSample extends Component {

  state = {
    items: [{key: 'a', size: 10}, {key: 'b', size: 20}, {key: 'c', size: 30}],
  }

  componentDidMount() {
    this.setState({
      items: [{key: 'a', size: 10}, {key: 'b', size: 20}], // remove c.
    });
  }

  willLeave() {
    // triggered when c's gone. Keeping c until its width/height reach 0.
    return {width: spring(0), height: spring(0)};
  }

  render() {
    return (
      <TransitionMotion
        willLeave={this.willLeave}
        styles={this.state.items.map(item => ({
          key: item.key,
          style: {width: item.size, height: item.size},
        }))}>
        {interpolatedStyles => {
          console.log('123')
          // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
          return (
            <div>
              {interpolatedStyles.map(config => {
                return <div key={config.key} style={{...config.style, border: '1px solid'}} />
              })}
            </div>
          )
        }
        }
          
      </TransitionMotion>
    );
  }
}

export default TransitionMotionSample;