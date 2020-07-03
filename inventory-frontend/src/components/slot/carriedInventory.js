import React from 'react';
import { connect } from 'react-redux'
import SlotList from './slotList'

const carriedInventory = props => {
  const carriedSlots = props.slots.filter(slot => slot.attributes.kind === "carried")

  return (
    <div>
      <h4>Carried Inventory</h4>
      <SlotList 
        slots={carriedSlots} 
        numSlots={props.maxSlots} 
        encumbered={props.encumbered} 
        heavilyEncumbered={props.heavilyEncumbered}
        slotType="carried"
      />
      <h4>Light Items</h4>
      <SlotList
        slots={props.slots.filter(slot => slot.attributes.kind === "light")}
        numSlots={4}
        slotType="light"
      />
    </div>
  )
}

const mapStateToProps = state => ({
  slots: state.slots.slots
})

export default connect(mapStateToProps)(carriedInventory)