const React = require('react')
const counterStore = require('../stores/counterStore')
const Actions = require('../actions/index.js')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: counterStore.getState()
    }

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement(event) {
    event.preventDefault()
    Actions.increment()

  }

  handleDecrement(event) {
    event.preventDefault()
    Actions.decrement()
  }



  componentDidMount () {
    this.removeListener = counterStore.addListener((counter) => {
      this.setState({ counter })
    })
  }

  componentWillUnmount() {
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
    )
  }
}


module.exports = App
