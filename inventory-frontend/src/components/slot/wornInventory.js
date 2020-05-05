import React from 'react';
import { connect } from 'react-redux'
import Slot from '../slot/slot'

const wornInventory = props => {
  return (
    <div>
      Worn Inventory
      <div className="inventory">
        <Slot location="Bandolier 1"/>
        <Slot location="Head"/>
        <Slot location="Bandolier 2"/>
        <Slot location="Left Hand"/>
        <Slot location="Torso"/>
        <Slot location="Right Hand"/>
        <Slot location="Bandolier 3"/>
        <Slot location="Legs"/>
        <Slot location="Bandolier 4"/>
      </div>
    </div>
  )
}

export default wornInventory