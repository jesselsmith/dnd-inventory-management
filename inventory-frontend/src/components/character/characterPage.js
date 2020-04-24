import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterInfo from './characterInfo'
import CharacterInventory from './characterInventory'

class CharacterPage extends Component {
  render(){
    return(
      <>
        <CharacterInfo />
        <CharacterInventory />
      </>
    )
  }
}

export default connect()(CharacterPage)