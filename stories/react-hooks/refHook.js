import React, { useState, Fragment, useRef, useEffect } from "react";

function useListen() {
  const ref = useRef()
  
  useEffect(() => {
    console.log('ref', ref.current)
  }, [])

  return ref
}

export default function RefHookSample() {
  const ref = useListen();

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(3)
  }, [])

  return (
    <>
      {count}
      <div ref={ref} >help</div>
    </>
  );
}

