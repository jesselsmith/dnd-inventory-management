import React from 'react';
import { connect } from 'react-redux'
import Slot from '../slot/slot'

const wornInventory = props => {
  return (
    <div>
      Worn Inventory
      <table className="inventory">
        <tr>
          <td><Slot location="Bandolier 1"/></td>
          <td><Slot location="Head"/></td>
          <td><Slot location="Bandolier 2"/></td>
        </tr>
        <tr>
          <td><Slot location="Left Hand"/></td>
          <td><Slot location="Torso"/></td>
          <td><Slot location="Right Hand"/></td>
        </tr>
        <tr>
          <td><Slot location="Bandolier 3"/></td>
          <td><Slot location="Legs"/></td>
          <td><Slot location="Bandolier 4"/></td>
        </tr>
      </table>
    </div>
  )
}

export default wornInventory