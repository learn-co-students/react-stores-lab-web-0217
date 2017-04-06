const React = require('react');
const counterStore = require('../stores/counterStore.js')
const actions = require('../actions/index.js')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener(
      (counter) => {
        this.setState({counter})
      }
    )
  }
  componentWillUnmount () {
    // Your implementation here.
    // counterStore.addListener.removeListener()
    this.removeListener()
  }

  handleIncrement(event){
    event.preventDefault()
    actions.increment()
  }

  handleDecrement(event){
    event.preventDefault()
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
