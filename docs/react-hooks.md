Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：
- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）

## use effect
### `componentDieUpdate` 
类似：
```js
useEffect(() => {
// do something
});
```

### 需要清除的 Hooks
> React 保证了每次运行 effect 的时，DOM 都已经更新完毕。
> 为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。
```js
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  // Specify how to clean up after this effect:
  return function cleanup() {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
});
```

### 为什么每次更新的时候都要运行 Effect
忘记正确地处理 componentDidUpdate 是 React 应用中常见的 bug 来源。
```js
componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentDidUpdate(prevProps) {
    // 取消订阅之前的 friend.id
    ChatAPI.unsubscribeFromFriendStatus(
      prevProps.friend.id,
      this.handleStatusChange
    );
    // 订阅新的 friend.id
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
```

### 提示: 通过跳过 Effect 进行性能优化
如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可：
```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```

**提示**
1. 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。


### Hooks 规则
React 怎么知道哪个 state 对应哪个 useState？答案是 React 靠的是 Hook 调用的顺序。

## 实战
https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react