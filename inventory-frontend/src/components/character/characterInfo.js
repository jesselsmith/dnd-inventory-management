
import React, { Component } from 'react'
import { connect } from 'react-redux'

class CharacterInfo extends Component {
  render(){
    return(
      <>
        <h2>{this.props.character.name}</h2>
        <div>Strength: {this.props.character.strength} <span className={this.props.character.encumberance}>{this.props.character.encumberance}</span></div>
      </>
    )
  }
}

export default connect()(CharacterInfo)