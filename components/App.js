const React = require('react');
import counterStore from '../stores/counterStore'
import actions from '../actions/index'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState({
        counter: state}
      );
    });
    this.setState(counterStore.getState());
  }

  componentWillUnmount () {
    this.removeListener()
  }

  handleIncrementClick (ev) {
    ev.preventDefault()
    actions.increment()
  }

  handleDecrementClick (ev) {
    ev.preventDefault()
    actions.decrement()
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrementClick}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrementClick}>

            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
