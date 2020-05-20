import React from 'react';
import { connect } from 'react-redux'
import Slot from '../slot/slot'
import SlotList from './slotList';

const wornInventory = props => {
  const wornSlots = props.slots.filter(slot => slot.attributes.kind === "worn")
  return (
    <div>
      Worn Inventory
      <div className="inventory">
        <SlotList slots={wornSlots} numSlots={9} slotType="worn" />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  slots: state.slots.slots
})

export default connect(mapStateToProps)(wornInventory)