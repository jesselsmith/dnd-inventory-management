import React, { Component } from 'react';

class AddContainerForm extends Component {
  state = {
    name: "",
    numSlots: 0
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addNewContainer(this.state)
  }

  handleChange = e => {
    if(e.target.name === "name"){
      this.setState({
        name: e.target.value
      })
    }else{
      this.setState({
        numSlots: e.target.value
      })
    }
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label for="name">Name: </label>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
          <input type="number" onChange={this.handleChange} value={this.state.numSlots} name="numSlots" />
          <input type="submit" value="Add Container" />
        </form>
      </>
    )
  }
}

export default AddContainerForm