import Store from './Store'


class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor(){
    super();
    this.state=0
  }

  increment(){
    let newState=this.getState() +1
    this.setState(newState)
  }

  decrement(){
    let newState=this.getState()-1
    this.setState(newState)
  }


}

module.exports = new CounterStore();
