import React from 'react';
import CounterStore from '../stores/counterStore.js'
import actions from '../actions'
// const CounterStore = require '../stores/CounterStore.js'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: CounterStore.getState()
      // Your implementation here.
    };

  }
  componentDidMount () {
    // Your implementation here.
    // add event listener to counterStore
    this.removeListener = CounterStore.addListener((state)=>{
      this.setState({counter: state})
    })
    this.setState(CounterStore.getState())

  }
  componentWillUnmount () {
    // Your implementation here.
    //remove event listener from counterStore
    this.removeListener()
  }

  handleClick(action, event){
    event.preventDefault()
    action()
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button onClick={this.handleClick.bind(this, actions.decrement)} className='decrement'>
            -
          </button>
          <button onClick={this.handleClick.bind(this, actions.increment)} className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
