import React, { Component } from 'react';
import BaseItemsList from './baseItemsList'
import BaseItemSearch from './baseItemSearch'
import { connect } from 'react-redux';
import { hideItemList, clearSelectedItem } from '../../../actions/baseItemActions'
import { postOwnedItem } from '../../../actions/ownedItemActions'
import { postSlot } from '../../../actions/slotActions'

class BaseItemSidebar extends Component {


  handleAdd = () => {
    this.props.postSlot({slot: { kind: this.props.selectedSlot.kind, location: this.props.selectedSlot.location - 1, base_item_id: this.props.selectedItem.id, character_id: this.props.activeCharacter} })
    this.scrollToElement(this.selectedSlotElement())
    this.props.clearSelectedItem()
    this.props.hideItemList()
  }

  handleCancel = () => {
    this.props.hideItemList()
  }


  scrollToElement= (element) => {
    setTimeout(() => { element.scrollIntoView() }, 280)
  }

  selectedSlotElement = () => {
    return document.getElementById(`${this.props.selectedSlot.kind}-${this.props.selectedSlot.location}`)
  }

  render(){
    return(
      <div className="item-sidebar">
        <h3>Add Item</h3>
        <BaseItemSearch />
        <BaseItemsList />
        <button onClick={this.handleCancel} >Cancel</button>
        <button onClick={this.handleAdd} >Add Item</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeCharacter: state.characters.activeCharacter,
  selectedSlot: state.slots.selectedSlot,
  selectedItem: state.baseItems.selectedItem,
  ownedItems: state.ownedItems.ownedItems
})

export default connect(mapStateToProps, { hideItemList, postOwnedItem, postSlot, clearSelectedItem })(BaseItemSidebar)
