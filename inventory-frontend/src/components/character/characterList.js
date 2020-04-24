import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchCharacters} from '../../actions/characterActions'

class CharacterList extends Component {
  displayCharacterList = () => {
    if (this.props.loading) {
      return <h2>Characters loading...</h2>
    } else {
      return this.props.characters.map(character => {
        return (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
                <button>{character.attributes.name} Strength: {character.attributes.strength} Encumberance: {character.attributes.encumberance}</button>
            </Link>
            </li>
        )
      })
    }
  }

  render(){
    return(
      <ul>
        {this.displayCharacterList()}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  loading: state.characters.loadingCharacters
})

export default connect(mapStateToProps, {fetchCharacters})(CharacterList)