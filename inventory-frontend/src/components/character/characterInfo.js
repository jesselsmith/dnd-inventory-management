
import React, { Component } from 'react'
import { connect } from 'react-redux'

class CharacterInfo extends Component {
  getCharacter = () => {  
    return this.props.characters.find(character => character.id === this.props.characterId)
  }
  render(){
    if(this.props.loading){
      return <h2>Loading Character...</h2>
    }else{
      let character = this.getCharacter()
      return(
        <>
          <h2>{character.attributes.name}</h2>
          <div>Strength: {character.attributes.strength} <span className={character.attributes.encumberance}>{character.attributes.encumberance}</span></div>
        </>
      )
    }
  }
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: state.characters.loadingCharacters
})


export default connect(mapStateToProps)(CharacterInfo)