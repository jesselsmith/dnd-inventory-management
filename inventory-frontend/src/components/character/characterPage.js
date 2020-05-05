import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterInfo from './characterInfo'
import CharacterInventory from './characterInventory'
import { fetchSlots } from '../../actions/slotActions'
import { fetchOwnedItems} from '../../actions/ownedItemActions'

class CharacterPage extends Component {
  getCharacter = () => {  
    return this.props.characters.find(character => character.id === this.props.match.params.characterId)
  }

  componentDidMount = () => {
    this.props.fetchSlots(this.props.match.params.characterId)
    this.props.fetchOwnedItems(this.props.match.params.characterId)
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

export default connect(mapStateToProps, { fetchSlots, fetchOwnedItems })(CharacterPage)