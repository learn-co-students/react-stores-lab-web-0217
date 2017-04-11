import React from 'react';
import counterStore from '../stores/counterStore';
import actions from '../actions';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      counter:counterStore.getState()
      // Your implementation here.
    };
    this.handleIncrement= this.handleIncrement.bind(this)
    this.handleDecrement=this.handleDecrement.bind(this)
  }
  //updating state in store and in app
  componentDidMount () {
    this.removeListener=counterStore.addListener((state)=>{
      this.setState({
        counter:state
      })
    })
    // Your implementation here.
  }
  componentWillUnmount () {
    this.removeListener()
    // Your implementation here.
  }

  handleIncrement(ev){
    ev.preventDefault()
    actions.increment()
  }

  handleDecrement(ev){
    ev.preventDefault()
    actions.decrement()
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
