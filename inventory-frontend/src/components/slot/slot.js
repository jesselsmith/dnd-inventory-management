import React, { Component } from 'react';
import { connect } from 'react-redux'

class Slot extends Component {
  render(){
    if(Boolean(this.props.slot)){
      return (
        <span className={"inventory-item " + this.props.encumberance}>Slot ID: {this.props.slot.id}</span>
      )
    }else{
      return (
        <span className={"inventory-item " + this.props.encumberance}>
           {this.props.location}
        </span>
      )
    }
  }
}

export default Slot