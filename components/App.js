const React = require('react');
const counterStore = require('../stores/counterStore')
const actions = require('../actions/index')

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    }
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
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

  handleInc(e) {
    e.preventDefault()
    actions.increment()
  }

  handleDec(e) {
    e.preventDefault()
    actions.decrement()
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDec}>
            -
          </button>
          <button className='increment' onClick={this.handleInc}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
