// Your implementation here.
// Hint: We need two actions!
const counterStore = require('../stores/counterStore')

const increment = () => {
  counterStore.increment()
}

const decrement = () => {
  counterStore.decrement()
}

module.exports = {
  increment,
  decrement
}
