
import React, { Component } from 'react'
import { connect } from 'react-redux'

class CharacterInfo extends Component {
  render(){
    return(
      <>
        <h2>{this.props.character.attributes.name}</h2>
        <div>Strength: {this.props.character.attributes.strength} <span className={this.props.character.attributes.encumberance}>{this.props.character.attributes.encumberance}</span></div>
      </>
    )
  }
}

export default connect()(CharacterInfo)