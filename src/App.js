import React, { Component } from 'react';
import './App.css';
import Block from './block';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      array: [
        ['block'], ['block1'], ['block2'], ['block3'], ['block4']
      ],
      index: 0
    }
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        index: this.state.index == this.state.array.length - 1 ? 0 : this.state.index + 1
      })
    }, 4000)
  }


  render () {
    return (
      <div className="App">
        <Block class={this.state.array[this.state.index][0]} />
      </div>
    )
  }
}

export default App;
