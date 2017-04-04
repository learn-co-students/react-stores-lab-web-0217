const React = require('react');
const counterStore = require('../stores/counterStore')
const actions = require ('../actions/index')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement(event) {
    event.preventDefault()
    actions.increment()
  }

  handleDecrement(event) {
    event.preventDefault()
    actions.decrement()
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState({counter: state})
    })
    this.setState(counterStore.getState())
  }

  componentWillUnmount () {
    this.removeListener(this)
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
