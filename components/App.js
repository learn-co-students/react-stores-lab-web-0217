import React from 'react';
import counterStore from '../stores/counterStore'
import actions from '../actions/index'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: counterStore.getState()
    };
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener(counter => {
      this.setState({ counter });
    });
  }

  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();
  }

  handleIncrement(event){
    actions.increment();
    event.preventDefault()
  }

  handleDecrement(event){
    actions.decrement()
    event.preventDefault()
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter' >{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement.bind(this)}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement.bind(this)}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
