const Store = require('./Store');

class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
    super(0)
  }

  increment(ev) {
    this.state += 1
  }

  decrement(ev) {
    this.state -= 1
  }

}

module.exports = new CounterStore();
