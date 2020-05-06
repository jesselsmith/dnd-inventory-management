import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharacterInfo from './characterInfo'
import CharacterInventory from './characterInventory'
import { fetchSlots } from '../../actions/slotActions'
import { fetchOwnedItems} from '../../actions/ownedItemActions'
import { setActiveCharacter } from '../../actions/characterActions'
import BaseItemSidebar from '../item/baseItem/baseItemSidebar'

class CharacterPage extends Component {
  getCharacter = () => {  
    return this.props.characters.find(character => character.id === this.props.match.params.characterId)
  }

  componentDidMount = () => {
    this.props.fetchSlots(this.props.match.params.characterId)
    this.props.fetchOwnedItems(this.props.match.params.characterId)
    this.props.setActiveCharacter(this.props.match.params.characterId)
  }

  showItemList = () => {
    if(this.props.showItemList){
      return <BaseItemSidebar />
    }
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
          {this.showSideBar()}
        </>
      )
    }
  }
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: state.characters.loadingCharacters,
  showItemList: state.baseItems.showItemList
})

export default connect(mapStateToProps, { fetchSlots, fetchOwnedItems, setActiveCharacter })(CharacterPage)