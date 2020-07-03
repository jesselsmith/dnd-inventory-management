import React from 'react';
import SlotList from '../slot/slotList'
import { connect } from 'react-redux';
import { deleteContainer } from '../../actions/containerActions'

const container  = props => {
  const slots = props.slots.filter(slot => slot.attributes.kind === `container-${props.name}`)
  return (
    <>
      <h5>{props.name}</h5>
      <button className="delete container-btn" onClick={() => props.deleteContainer(props.id)}>Delete Container</button>
      <SlotList slots={slots} numSlots={props.numSlots} slotType={`container-${props.name}`} />
    </>
  )
}

const mapStateToProps = state => ({
  slots: state.slots.slots
})

export default connect(mapStateToProps, { deleteContainer })(container)