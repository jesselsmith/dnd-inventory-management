import React, { Component } from 'react';
import { connect } from 'react-redux'
import { patchOwnedItem } from '../../../actions/ownedItemActions'

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
      buttons.push(<button className="plus" key="1" onClick={this.handleNotchIncrease}>+</button>)
      buttons.push(<button className="minus" key='2' onClick={this.handleNotchDecrease}>-</button>)
    }
    return buttons
  }

  handleNotchIncrease = () => {
    let item = this.getItem()
    this.props.patchOwnedItem({
      id: this.props.itemId,
      notches: item.attributes.notches + 1
    })
  }

  handleNotchDecrease = () => {
    let item = this.getItem()
    this.props.patchOwnedItem({
      id: this.props.itemId,
      notches: item.attributes.notches - 1
    })
  }

  render(){
    let item = this.getItem()
    let baseItem = item.attributes.base_item
    return(
      <><h3>Name: {baseItem.name} </h3>
      <div className="notches" onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}>
        <span className="notch-text">Notches: {item.attributes.notches}</span>
        <span className="notch-btns">{this.showNotchButtons()}</span>
      </div>
      </>
    )  
  }
}

const mapStateToProps = state => ({
  ownedItems: state.ownedItems.ownedItems
})

export default connect(mapStateToProps, { patchOwnedItem })(OwnedItem)