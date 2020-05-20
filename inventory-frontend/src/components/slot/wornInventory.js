import React from 'react';
import { connect } from 'react-redux'
import SlotList from './slotList';

const wornInventory = props => {
  const wornSlots = props.slots.filter(slot => slot.attributes.kind === "worn")
  return (
    <div>
      <h4>Worn Inventory</h4>
      <SlotList slots={wornSlots} numSlots={9} slotType="worn" />
    </div>
  )
}

const mapStateToProps = state => ({
  slots: state.slots.slots
})

export default connect(mapStateToProps)(wornInventory)