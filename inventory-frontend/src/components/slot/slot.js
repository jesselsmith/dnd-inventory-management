import React, { Component } from 'react';
import { connect } from 'react-redux'

class Slot extends Component {
  state = {
    hasCard: false
  }
  render(){
    return (
      <span>
         {this.props.location}
      </span>
    )
  }
}

export default Slot