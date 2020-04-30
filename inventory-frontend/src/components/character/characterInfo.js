
import React, { Component } from 'react'
import { connect } from 'react-redux'

class CharacterInfo extends Component {

  render(){
    let character = this.props.character
    debugger
    return(
      <>
        <h2>{character.attributes.name}</h2>
        <div>Strength: {character.attributes.strength} <span className={character.attributes.encumberance}>{character.attributes.encumberance}</span></div>
      </>
    )
  }
}

export default connect()(CharacterInfo)