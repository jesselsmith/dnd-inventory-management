import React, { Component } from 'react';
import { connect } from 'react-redux'

class SlotList extends Component {
  
  displaySlots = () => {
    const slotArray = []
    for(i = 0; i < this.props.numSlots; i++){
      let currSlot = this.props.slots.find(slot => slot.location === i)
      slotArray.push(<Slot slot={currSlot} location={i} />)
    }
  }

  render(){
    return (
      <>
        {this.displaySlots()}
      </>
    )
  }
}

export default SlotList