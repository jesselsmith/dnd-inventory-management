import React, { Component } from 'react';
import { connect } from 'react-redux'

class Slot extends Component {
  render(){
    if(Boolean(this.props.slot)){
      return (
        <span>Slot ID: {this.props.slot.id}</span>
      )
    }else{
      return (
        <span>
           {this.props.location}
        </span>
      )
    }
  }
}

export default Slot