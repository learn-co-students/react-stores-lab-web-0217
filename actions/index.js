const counterStore = require('../stores/counterStore')

module.exports = {
  decrement() {
    counterStore.decrement()
  },

  increment() {
    counterStore.increment()
  }
};
