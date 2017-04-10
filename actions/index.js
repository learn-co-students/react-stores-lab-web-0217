// Your implementation here.
// Hint: We need two actions!

const counterStore = require('../stores/counterStore');

function increment() {
  counterStore.increment()
}

function decrement() {
  counterStore.decrement()
}

module.exports = { increment, decrement }
