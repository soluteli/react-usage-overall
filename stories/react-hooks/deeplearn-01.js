import React, { useRef, useState, useEffect, Component, useCallback } from "react";
// useEffect 完全指南 https://github.com/dt-fe/weekly/blob/v2/096.%E7%B2%BE%E8%AF%BB%E3%80%8AuseEffect%20%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97%E3%80%8B.md
// https://cloud.tencent.com/developer/article/1392973

class ClassComponent extends Component {
  state = {
    value: 1
  }

  log = () => {
    setTimeout(() => {
      alert(this.state.value)
    }, 1000);
  }

  render () {
    const {value} = this.state
    return (
      <div>
        <p>ClassComponent</p>
        <div>value: {value}</div>
        <button onClick={() => this.setState({value: value + 1})}>add</button>
        <br/>
        <button onClick={this.log}>alert</button>
      </div>
    )
  }
}

const FunctionComponent = () => {
  const [value, setValue] = useState(1)
  const countRef = useRef(value)

  useEffect(() => {
    countRef.current = value
  }, [value])

  const log = () => {
    setTimeout(() => {
      alert(countRef.current)
    }, 1000);
  }

  return (
    <div>
      <p>FunctionComponent</p>
      <div>value: {value}</div>
      <button onClick={() => setValue(value + 1)}>add</button>
      <br/>
      <button onClick={log}>alert</button>
    </div>
  )
}

const Counter = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('tick', value+1)
      setValue(value + 1)
    }, 1000);
    return () => {
      console.log('clear')
      clearInterval(timer)
    }
  }, [value])
  console.log('render')
  return (
    <div>
      <p>Counter</p>
      <div>count: {value}</div>
    </div>
  )
}

const CounterCb = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // 回调函数的最新值
      setValue(value => {
        const v = value + 1
        console.log('count:', v)
        return v
      })
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div>
      <p>Counter</p>
      <div>count: {value}</div>
    </div>
  )
}

const CounterUseCb = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // 回调函数的最新值
      setValue(value => {
        const v = value + 1
        console.log('count:', v)
        return v
      })
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div>
      <p>Counter</p>
      <div>count: {value}</div>
    </div>
  )
}


const App = () => {
  return (
    <div>
      {/* <CaputureUseState />
      <CaputureUseEffect />
      <CaputureUseREF /> */}
      {/* <ClassComponent /> */}
      {/* <hr></hr> */}
      {/* <FunctionComponent /> */}
      <Counter />
      {/* <CounterCb /> */}
    </div>
  );
};

export default App

