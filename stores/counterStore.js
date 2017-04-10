const Store = require('./Store');

class CounterStore extends Store {

  constructor(){
    super(0)
  }

  increment(){
    this.state += 1
  }


  decrement(){
    this.state -= 1
  }


}
module.exports = new CounterStore();
