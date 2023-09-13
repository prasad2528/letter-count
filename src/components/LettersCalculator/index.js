import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="heading">
              Calculate the <br />
              Letters you <br />
              enter
            </h1>
            <label htmlFor="letter">Enter the Phrase</label>
            <br />
            <input
              type="text"
              id="letter"
              placeholder="Enter the Phrase"
              className="text-input"
              onChange={this.onChange}
            />
            <p className="res" type="button">
              No.of letters: {count.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
