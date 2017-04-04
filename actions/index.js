const counterStore = require('../stores/counterStore.js')

module.exports = {

   decrement() {
    counterStore.decrement()
  },

   increment() {
    counterStore.increment()
  }
};
