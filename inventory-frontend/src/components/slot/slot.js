import React, { Component } from 'react';
import { connect } from 'react-redux'
import OwnedItem from '../item/ownedItem/ownedItem'
import { showItemList } from '../../actions/baseItemActions'
import { setSelectedSlot, deleteSlot } from '../../actions/slotActions'
import { deleteOwnedItem } from '../../actions/ownedItemActions'

class Slot extends Component {
  
  state = {
    showRemove: false,
    showAdd: false,
    showChargeButtons: false,
    showSelected: false,
    hovered: "no"
  }
  
  handleMouseEnter = event => {
    if(this.isItemInSlot()){
      this.setState({
        showRemove: true,
        hovered: "hovered"
      })
    }else{
      this.setState({
        showAdd: true
      })
    }
    
  }

  handleMouseLeave = event => {
    this.setState({
      showRemove: false,
      showAdd: false
    })
    if(this.state.hovered === "hovered"){
      this.setState({
        hovered: "unhovered"
      })
    }
  }

  showButtons = () => {
    const buttons = []
    if(this.state.showRemove){
      buttons.push(<button className="remove" key="0" onClick={this.handleRemoveItem}>Remove Item</button>)
    }
    if(this.state.showAdd){
      buttons.push(<button className="add" key='1' onClick={this.handleAddItem}>Add Item</button>)
    }
    if(this.state.showChargeButtons){
      buttons.push(<button className="charge plus" key='2'>+</button>)
      buttons.push(<button className="charge minus" key='3'>-</button>)
    }
    return buttons
  }

  handleAddItem = event => {
    this.props.showItemList()
    this.props.setSelectedSlot(this.props.slotType, this.props.location)
  }

  handleRemoveItem = () => {
    const ownedItem = this.getItem()
    this.props.deleteOwnedItem(ownedItem)
  }

  className = () => {
    let className = `inventory-item ${this.props.encumberance}`

    if(this.props.selectedSlot && this.props.slotType === this.props.selectedSlot.kind && 
      this.props.location === this.props.selectedSlot.location){
        className += ` selected`
      }
    if(this.state.hovered === "hovered"){
      className += ' hovered-item'
    }else if(this.state.hovered === "unhovered"){
      className += ' unhovered-item'
    }
    return className
  }

  id = () => {
    return `${this.props.slotType}-${this.props.location}`
  }

  getItem = () => {
    return this.props.ownedItems.find(item => item.id === this.props.slot.relationships.owned_item.data.id)
  }

  isItemInSlot = () => {
    return Boolean(this.props.slot) && Boolean(this.getItem())
  }

  showItem = () => {
    if(this.isItemInSlot()){
      return <OwnedItem itemId={this.props.slot.relationships.owned_item.data.id} />
    }else{
      return this.props.location
    }
  }

  render(){
    return (
      <div className={this.className()} id={this.id()}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
          {this.showItem()}
          {this.showButtons()}
      </div>
    )
    }
}

const mapStateToProps = state => ({
  characterId: state.characters.activeCharacter,
  selectedSlot: state.slots.selectedSlot,
  ownedItems: state.ownedItems.ownedItems
})

export default connect(mapStateToProps, { showItemList, setSelectedSlot, deleteSlot, deleteOwnedItem })(Slot)