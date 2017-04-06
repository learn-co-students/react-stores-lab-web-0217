const React = require('react')
const counterStore = require('../stores/counterStore')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: counterStore.getState()
    }
  }

  componentDidMount () {

  }

  componentWillUnmount () {
    // Your implementation here.
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'></h1>
        <div className='actions'>
          <button className='decrement'>
            -
          </button>
          <button className='increment'>
            +
          </button>
        </div>
      </div>
    )
  }
}

// componentDidMount () {
//   this.removeListener = userStore.addListener((state) => {
//     this.setState(state)
//   })
//   this.setState(userStore.getState())
// }

module.exports = App
