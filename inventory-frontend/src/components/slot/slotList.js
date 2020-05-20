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

  slotName = location => {
    const WORN_SLOTS = [
      "Bandolier 1",
      "Head",
      "Bandolier 2",
      "Left Hand",
      "Torso",
      "Right Hand",
      "Bandolier 3",
      "Legs",
      "Bandolier 4"
    ]
    if(this.props.slotType === "worn"){
      return WORN_SLOTS[location]
    }else{
      return location + 1
    }

  }
  
  displaySlots = () => {
    const slotArray = []
    for(let i = 0; i < this.props.numSlots; i++){
      let currSlot = this.props.slots.find(slot => slot.attributes.location === i)
      slotArray.push(
        <span key={i}>
          <Slot slot={currSlot} location={i + 1} slotName={this.slotName(i)} encumberance={this.getEncumberance(i)} slotType={this.props.slotType} />
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