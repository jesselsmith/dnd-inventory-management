import React, { Component } from 'react';
import { connect } from 'react-redux'

class OwnedItem extends Component {
  state = {
    showNotchButtons: false
  }

  getItem = () => {
    return this.props.ownedItems.find(item => item.id === this.props.itemId)
  }

  handleMouseEnter = () => {
    this.setState({
      showNotchButtons: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      showNotchButtons: false
    })
  }

  showNotchButtons = () => {
    let buttons  = []
    if(this.state.showNotchButtons){
      buttons.push(<button className="notch plus" key="1">+</button>)
      buttons.push(<button className="notch minus" key='2'>-</button>)
    }
    return buttons
  }

  render(){
    let item = this.getItem()
    let baseItem = item.attributes.base_item
    return(
      <><h3>Name: {baseItem.name} </h3>
      <span className="notches" onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}>Notches: {item.attributes.notches} {this.showNotchButtons()}</span>
      </>
    )  
  }
}

const mapStateToProps = state => ({
  ownedItems: state.ownedItems.ownedItems
})

export default connect(mapStateToProps)(OwnedItem)