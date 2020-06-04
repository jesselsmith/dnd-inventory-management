import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchBaseItems } from '../../../actions/baseItemActions'

class BaseItemSearch extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchBaseItems(this.state)
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name} />
          <input type="submit" value="Search" />
        </form>
      </>
    )
  }
}

export default connect(null, { fetchBaseItems })(BaseItemSearch)