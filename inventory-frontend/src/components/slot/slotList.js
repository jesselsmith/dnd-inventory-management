import React, { Component } from 'react';
import { connect } from 'react-redux'
import Slot from './slot'

class SlotList extends Component {

  getEncumberance = i => {
    if(i >= this.props.heavilyEncumbered){
      return "heavy"
    }else if( i >= this.props.encumbered ){
      return "encumbered"
    }else{
      return "unencumbered"
    }
  }
  
  displaySlots = () => {
    const slotArray = []
    for(let i = 0; i < this.props.numSlots; i++){
      let currSlot = this.props.slots.find(slot => slot.attributes.location === i)
      slotArray.push(
        <span key={i}>
          <Slot slot={currSlot} location={i + 1} encumberance={this.getEncumberance(i)} slotType={this.props.slotType} />
        </span>)
    }
    return slotArray
  }

  render(){
    return (
      <div className="inventory">
        {this.displaySlots()}
      </div>
    )
  }
}

export default SlotList