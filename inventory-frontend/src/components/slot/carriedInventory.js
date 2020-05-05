import React from 'react';
import { connect } from 'react-redux'
import SlotList from './slotList'

const carriedInventory = props => {
  const carriedSlots = props.slots.filter(slot => slot.attributes.kind === "carried")

  return (
    <div>
      "Carried Inventory"
      <SlotList slots={carriedSlots} numSlots={props.maxSlots} encumbered={props.encumbered} heavilyEncumbered={props.heavilyEncumbered} />
    </div>
  )
}

const mapStateToProps = state => ({
  slots: state.slots.slots
})

export default connect(mapStateToProps)(carriedInventory)