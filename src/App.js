import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = { //object  
    count: 0
  };
  add = () => { //setState를 호출할 때마다 새로운 state와 함께 render를 다시한다.
    this.setState(current => ({ count: current.count + 1})); //current는 현재 값을 가져온다.
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  render() { //리액트는 자동으로 class component의 render method를 실행한다.
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    )
  }
}

export default App;
