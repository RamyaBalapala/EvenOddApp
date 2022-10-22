import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  getEvenOddNumber = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayedText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-bg-container">
        <div className="even-odd-app-container">
          <h1 className="count-heading">Count {count} </h1>
          <p className="even-odd-heading">Count is {displayedText} </p>
          <button
            type="button"
            className="button"
            onClick={this.getEvenOddNumber}
          >
            Increment
          </button>
          <p className="app-info">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
