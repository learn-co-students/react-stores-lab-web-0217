const CS = require('../stores/counterStore')

module.exports = {
  increment: () => CS.increment(),
  decrement: () => CS.decrement()
}
