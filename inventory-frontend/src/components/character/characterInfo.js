
import React, { Component } from 'react'
import { connect } from 'react-redux'

class CharacterInfo extends Component {

  numCarriedItems = () => {
    return this.props.slots.filter(slot => slot.attributes.kind === "carried").length
  }

  maxSlots = () => {
    return Math.max(9, this.props.character.attributes.strength * 2)
  }

  encumberedLimit = () => {
    return Math.max(9, this.props.character.attributes.strength)
  }
  
  heavilyEncumberedLimit = () => {
    return Math.min(this.encumberedLimit() + 3, this.maxSlots())
  }

  encumberance = () => {
    const carried = this.numCarriedItems()
    if(carried <= this.encumberedLimit()){
      return 'Unencumbered'
    } else if(carried <= this.heavilyEncumberedLimit()){
      return 'Encumbered'
    }else if(carried <= this.maxSlots()){
      return 'Heavily Encumbered'
    }else{
      return 'Over the Limit'
    }
  }

  render(){
    let character = this.props.character
    return(
      <>
        <h2>{character.attributes.name}</h2>
        <div>Strength: {character.attributes.strength} <span className={this.encumberance()}>{this.encumberance()}</span></div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  slots: state.slots.slots
})

export default connect(mapStateToProps)(CharacterInfo)