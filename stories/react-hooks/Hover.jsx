import React, { Component } from 'react'
import { useHover } from "react-use";

class WrappedDiv extends Component {
  render () {
    const {hasHovered} = this.props
    console.log(this.props)
    return <div>Hover me! {hasHovered && 'Thanks!'}</div>
  }
}

const Demo = () => {
  // const element = (hasHovered) => <WrappedDiv hasHovered={hasHovered} />
  const element = (hasHovered) => <div>Hover me! {hasHovered && 'Thanks!'}</div>
  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  );
};

export default Demo