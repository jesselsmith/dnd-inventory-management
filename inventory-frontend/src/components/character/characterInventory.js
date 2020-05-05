
import React, { Component } from 'react'
import { connect } from 'react-redux'
import WornInventory from '../slot/wornInventory'
import CarriedInventory from '../slot/carriedInventory'
import ContainerInventory from '../slot/containerInventory'

class CharacterInventory extends Component {
  render(){
    if(this.props.loading){
      return <h2>Loading Inventory...</h2>
    }
    else{
      return(
        <>
          <h2>Inventory</h2>
          <WornInventory strength={this.props.character.attributes.strength} />
          <CarriedInventory encumbered={this.props.character.attributes.encumbered_limit} 
            heavilyEncumbered={this.props.character.attributes.heavily_encumbered_limit} 
            maxSlots={this.props.character.attributes.max_slots} />
          <ContainerInventory />
        </>
      )
    }
  }
}

const mapStateToProps = state => ({
  loading: state.slots.loadingSlots || state.ownedItems.loadingOwnedItems
})

export default connect(mapStateToProps)(CharacterInventory)