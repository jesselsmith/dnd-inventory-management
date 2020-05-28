import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postCharacter } from '../../actions/characterActions'

class NewCharacterForm extends Component {
  state = {
    name: "",
    strength: 10
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postCharacter(
      {
        character: {
          ...this.state
        }
      }
      )
  }

  handleChange = e => {
    if(e.target.name === "name"){
      this.setState({
        name: e.target.value
      })
    }else{
      this.setState({
        strength: e.target.value
      })
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
          <label htmlFor="strength">Strength: </label>
          <input type="number" onChange={this.handleChange} value={this.state.strength} name="numSlots" />
          <input type="submit" value="Add New Character" />
        </form>
      </div>
    )
  }
}

export default connect(null, { postCharacter })(NewCharacterForm)