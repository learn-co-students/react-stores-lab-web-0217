import Store from './Store.js'

class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
    super(0)
  }

  increment() {
    let inc = this.getState() + 1
    this.setState(inc)
  }

  decrement() {
    let dec = this.getState() - 1
    this.setState(dec)
  }
}

module.exports = new CounterStore();
