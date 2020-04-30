
import React, { Component } from 'react'
import { connect } from 'react-redux'
import WornInventory from '../slot/wornInventory'
import CarriedInventory from '../slot/carriedInventory'
import ContainerInventory from '../slot/containerInventory'

class CharacterInventory extends Component {
  render(){
    return(
      <>
        
        Inventory
        <WornInventory />
        {/*<CarriedInventory />
        <ContainerInventory /> */}
      </>
    )
  }
}

export default connect()(CharacterInventory)