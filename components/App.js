const React = require('react');
const actions = require('../actions');
const counterStore = require('../stores/counterStore');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
    this.incrementHandler = this.incrementHandler.bind(this)
    this.decrementHandler = this.decrementHandler.bind(this)
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener(counter => {
      this.setState({ counter });
    });
    // counterStore.addListener((state) => {
    //   this.setState(state)
    // });
    // this.setState(counterStore.getState())
  }

  componentWillUnmount () {
    this.removeListener()  //how are we connecting this?
    // Your implementation here.
  }

  incrementHandler(ev){
    ev.preventDefault()
    actions.increment()
  }

  decrementHandler(ev){
    ev.preventDefault()
    actions.decrement()  //where is action coming from?
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.decrementHandler}>
            -
          </button>
          <button className='increment' onClick={this.incrementHandler}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
