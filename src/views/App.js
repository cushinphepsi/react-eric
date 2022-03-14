import React from 'react';
import './App.scss';
import Todo from './Todo/Todo'

class App extends React.Component {

  state = {
    name: 'duc'
  }

  handleInput = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App-header">
        <Todo />
      </div>
    );
  }
}

export default App;
