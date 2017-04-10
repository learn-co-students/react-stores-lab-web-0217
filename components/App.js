import React from 'react';
import counterStore from '../stores/counterStore';
import actions from '../actions';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };

    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement(ev){
    ev.preventDefault()
    actions.increment()
  }

  handleDecrement(ev){
    ev.preventDefault()
    actions.decrement()
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((counter) => {
    this.setState({counter});
  });
  this.setState(counterStore.getState());
  }

  componentWillUnmount () {
    this.removeListener()
  }


  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
