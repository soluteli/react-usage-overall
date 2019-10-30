import React, { useState, Fragment } from "react";

export default function StateHookSample() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Fragment>
  );
}

