const React = require('react')
const counterStore = require('../stores/counterStore')
const Actions = require('../actions/index')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: counterStore.getState()
    }
    this.handleIncrementClick = this.handleIncrementClick.bind(this)
    this.handleDecrementClick = this.handleDecrementClick.bind(this)
  }

  handleDecrementClick(e) {
    e.preventDefault()
    Actions.decrement()
  }

  handleIncrementClick(e) {
    e.preventDefault()
    Actions.increment()
  }

  componentDidMount() {
    this.removeListener = counterStore.addListener((counter) =>
      this.setState({ counter })
    )
  }

  componentWillUnmount () {
    console.log(this.removeListeners)
    this.removeListener()
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
    )
  }
}


module.exports = App
