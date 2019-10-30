import React, { Fragment, useState, useEffect } from "react";

export default function StateHookSample() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
   console.log(`You clicked ${count} times`)
  })

  return (
    <Fragment>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Fragment>
  );
}

