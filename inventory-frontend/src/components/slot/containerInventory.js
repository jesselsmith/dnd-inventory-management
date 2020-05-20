import React from 'react';
import { connect } from 'react-redux'

const containerInventory = props => {
  return (
    <div>
      <h4>Container Inventory</h4>
    </div>
  )
}

const mapStateToProps = state => ({
  slots: state.slots.slots
})

export default connect(mapStateToProps)(containerInventory)