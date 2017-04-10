import Store from './Store'

class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  constructor(){
    super(0)
  }


  increment(){
    // console.log("incrementing")
    let prevState = this.getState()
    this.setState(prevState + 1)
  }

  decrement(){
    // console.log("decrementing")
    let prevState = this.getState()
    this.setState(prevState - 1)
  }

}

module.exports = new CounterStore();
