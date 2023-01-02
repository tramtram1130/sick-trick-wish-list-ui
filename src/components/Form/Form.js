import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: "",
      name: "",
      obstacle: "",
      tutorial: ""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTrick(newTrick)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ stance: "", name: "", obstacle: "", tutorial: "" }) 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="stance" onChange={this.handleChange}>
          <option value="" disabled selected>Choose your Stance</option>
          <option value="switch">Switch</option>
          <option value="regular">Regular</option>
        </select>
        <input
          type="text"
          placeholder="Name of Trick"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <select name="obstacle" onChange={this.handleChange}>
          <option value="" disabled selected>Choose your Obstacle</option>
          <option value="flat ground">Flat Ground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
        <input
          type="text"
          placeholder="Link to Tutorial"
          name="tutorial"
          value={this.state.tutorial}
          onChange={this.handleChange}
        />
        <button>Send It!</button>
      </form>
    )
  }
}

export default Form