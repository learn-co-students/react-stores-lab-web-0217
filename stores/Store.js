class Store {
  constructor(initialState){
    this.state = initialState
    this.listeners = []
  }

  getState(){
    return this.state
  }

  setState(state){
    this.state = state
    for (const listener of this.listeners) { //for ... of iterable statement.
      listener.call(this, state)
    }
  }

  addListener(listener){
    this.listeners.push(listener)
    const removeListener = () => {
     this.listeners = this.listeners.filter((l) => listener !== l) //filters out the current listener defined on line 16
    }
   return removeListener; //why do we embed this function in addLister instead of it's independent thing?
  }

  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
}

module.exports = Store;
