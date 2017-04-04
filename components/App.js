const React = require('react');
const actions = require('../actions/index.js')
const Store = require('../stores/Store')
const counterStore = require('../stores/counterStore')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener(counter => {
      this.setState({counter});
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  handleDecrement(event) {
    event.preventDefault();
    actions.decrement();
  }

  handleIncrement(event) {
    event.preventDefault();
    actions.increment();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button onClick={this.handleDecrement} className='decrement'>
            -
          </button>
          <button onClick={this.handleIncrement} className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
