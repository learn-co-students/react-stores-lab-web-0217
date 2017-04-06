const counterStore = require('../stores/counterStore')

module.exports = {
  // Your implementation here.
  // Hint: We need two actions!
  increment(){
    counterStore.increment()
  },

  decrement(){
    counterStore.decrement()
  }
};
