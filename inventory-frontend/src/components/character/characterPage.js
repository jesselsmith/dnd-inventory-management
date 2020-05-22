import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterInfo from './characterInfo'
import CharacterInventory from './characterInventory'
import { fetchSlots } from '../../actions/slotActions'
import { fetchOwnedItems} from '../../actions/ownedItemActions'
import { setActiveCharacter } from '../../actions/characterActions'
import BaseItemSidebar from '../item/baseItem/baseItemSidebar'
import { fetchContainers } from '../../actions/containerActions'

class CharacterPage extends Component {
  getCharacter = () => { 
    return this.props.characters.find(character => character.id === this.props.match.params.characterId)
  }

  componentDidMount = () => {
    this.props.fetchSlots(this.props.match.params.characterId)
    this.props.fetchOwnedItems(this.props.match.params.characterId)
    this.props.setActiveCharacter(this.props.match.params.characterId)
    this.props.fetchContainers(this.props.match.params.characterId)
  }

  componentDidUpdate = () => {
    if(this.props.activeCharacter !== this.props.match.params.characterId){
      this.props.setActiveCharacter(this.props.match.params.characterId)
    }
  }

  render(){
    if(this.props.loading){
      return <h2>Loading Character...</h2>
    }else{
      let character = this.getCharacter()
      if(this.props.showItemList){
        return(
          <>
            <div className="main margin">
              <CharacterInfo character={character} />
              <CharacterInventory character={character} />
            </div>
            <BaseItemSidebar />
          </>
        )
      }else{
        return(
          <>
            <div className="main no-margin">
              <CharacterInfo character={character} />
              <CharacterInventory character={character} />
            </div>
          </>
        )
      }
    }
  }
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: state.characters.loadingCharacters,
  showItemList: state.baseItems.showItemList,
  activeCharacter: state.characters.activeCharacter
})

export default connect(mapStateToProps, { fetchSlots, fetchOwnedItems, setActiveCharacter, fetchContainers })(CharacterPage)