import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postContainer } from '../../actions/containerActions'

class AddContainerForm extends Component {
  state = {
    name: "",
    num_slots: 0
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postContainer(
      {
        container: {
          ...this.state, 
          character_id: this.props.activeCharacter
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
        num_slots: e.target.value
      })
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
          <label htmlFor="numSlots">Number of Slots: </label>
          <input type="number" onChange={this.handleChange} value={this.state.num_slots} name="numSlots" />
          <input type="submit" value="Add Container" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeCharacter: state.characters.activeCharacter
})

export default connect(mapStateToProps, { postContainer })(AddContainerForm)