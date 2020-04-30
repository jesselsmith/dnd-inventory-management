import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterInfo from './characterInfo'
import CharacterInventory from './characterInventory'

class CharacterPage extends Component {
  getCharacter = () => {  
    return this.props.characters.find(character => character.id === this.props.match.params.characterId)
  }

  render(){
    if(this.props.loading){
      return <h2>Loading Character...</h2>
    }else{
      let character = this.getCharacter()
      return(
        <>
          <CharacterInfo character={character} />
          <CharacterInventory character={character} />
        </>
      )
    }
  }
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: state.characters.loadingCharacters
})

export default connect(mapStateToProps)(CharacterPage)