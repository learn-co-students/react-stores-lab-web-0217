const userStore = require('./Store')

class CounterStore extends userStore {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
  	super(0)
  	
  }

  increment() {
  	let incrementedState = this.getState() + 1
  	this.setState(incrementedState)
  }

  decrement() {
  	let decrementedState = this.getState() - 1
  	this.setState(decrementedState)
  }
}

module.exports = new CounterStore()
