
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
          <WornInventory />
          <CarriedInventory />
          <ContainerInventory />
        </>
      )
    }
  }
}

const mapStateToProps = state => ({
  loading: state.slots.loadingSlots
})

export default connect(mapStateToProps)(CharacterInventory)