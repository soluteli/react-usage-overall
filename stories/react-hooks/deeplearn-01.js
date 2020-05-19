import React, { useRef, useState, useEffect } from "react";
// useEffect 完全指南 https://github.com/dt-fe/weekly/blob/v2/096.%E7%B2%BE%E8%AF%BB%E3%80%8AuseEffect%20%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97%E3%80%8B.md
// https://cloud.tencent.com/developer/article/1392973
const CaputureUseState = () => {
  const [temp, setTemp] = React.useState(5);

  const log = () => {
    console.log('wait')
    setTimeout(() => {
      console.log("现在 temp =", temp);
    });
  };

  return (
    <div>
      <p>CaputureUseState</p>
      <span>{temp}</span>
      <button onClick={() => {
        log();
        setTemp(temp + 1);
        // 3 秒前 temp = 5，现在 temp = 5
      }}>点击</button>
      <hr />
    </div>
  );
};

const CaputureUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // capture value 获取到本次 render 时的值
    console.log(`CaputureUseEffect You clicked ${count} times`);
  });

  return (
    <div>
      <p>CaputureUseState</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <hr />
    </div>
  );
};

const CaputureUseREF = () => {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);

  useEffect(() => {
    // Set the mutable latest value
    // ⚠️下面的注释需要注意， 每次 render 都用的时第一次 render 的引用
    // latestCount.current = count;
    setTimeout(() => {
      // Read the mutable latest value
      console.log(`CaputureUseREF You clicked ${latestCount.current} times`);
    });
  });

  return (
    <div>
      <p>CaputureUseREF</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <hr />
    </div>
  );
};


const App = () => {
  return (
    <div>
      <CaputureUseState />
      <CaputureUseEffect />
      <CaputureUseREF />
    </div>
  );
};

export default App

