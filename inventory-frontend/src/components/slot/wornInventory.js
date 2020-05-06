import React from 'react';
import { connect } from 'react-redux'
import Slot from '../slot/slot'

const wornInventory = props => {
  return (
    <div>
      Worn Inventory
      <div className="inventory">
        <Slot location="Bandolier 1" slotType="worn"/>
        <Slot location="Head" slotType="worn"/>
        <Slot location="Bandolier 2" slotType="worn"/>
        <Slot location="Left Hand" slotType="worn"/>
        <Slot location="Torso" slotType="worn"/>
        <Slot location="Right Hand" slotType="worn"/>
        <Slot location="Bandolier 3" slotType="worn"/>
        <Slot location="Legs" slotType="worn"/>
        <Slot location="Bandolier 4" slotType="worn"/>
      </div>
    </div>
  )
}

export default wornInventory