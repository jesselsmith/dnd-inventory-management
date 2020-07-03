import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postBaseItem } from '../../../actions/baseItemActions'

class AddCustomItem extends Component {
  state = {
    name: "",
    image: "",
    has_charges: false,
    charges: 0
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postBaseItem(
      {
        base_item: {
          ...this.state
        }
      }
      )
    this.props.closeForm()
  }

  handleChange = e => {
   let stateObject = {}
   stateObject[e.target.name] = (e.target.name === 'has_charges') ? e.target.checked : e.target.value
   this.setState(stateObject)
  }

  handleCancel = e => {
    e.target.parentElement.reset()
    this.props.closeForm()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
          </div>
          <div>
            <label htmlFor="image">Image Address: </label>
            <input type="text" onChange={this.handleChange} value={this.state.image} name="image" />
          </div>
          <div>
            <label htmlFor="has_charges">Has Charges?: </label>
            <input
              name="has_charges"
              type="checkbox"
              checked={this.state.has_charges}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="charges">Charges: </label>
            <input type="number" onChange={this.handleChange} value={this.state.charges} name="charges" />
          </div>
          <input className="addItem" type="submit" value="Add Custom Item" />
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { postBaseItem })(AddCustomItem)