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
    showNeed14Strength: false,
    showNeed18Strength: false,
    hovered: "no"
  }

  strength = () => {
    return this.props.characters.find(character => {
      return character.id === this.props.characterId
    }).attributes.strength
  }
  
  handleMouseEnter = event => {
    if(this.isItemInSlot()){
      this.setState({
        showRemove: true,
        hovered: "hovered"
      })
    }else{
      if(this.props.slotName === "Bandolier 3" && this.strength() < 14){
        this.setState({
          showNeed14Strength: true
        })
      }else if(this.props.slotName === "Bandolier 4" && this.strength() < 18){
        this.setState({
          showNeed18Strength: true
        })
      }else{
        this.setState({
          showAdd: true
        })
      }
    }
    
  }

  handleMouseLeave = event => {
    this.setState({
      showRemove: false,
      showAdd: false,
      showNeed14Strength: false,
      showNeed18Strength: false
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

  showNoItem = () => {
    if(this.state.showNeed14Strength){
      return(
        <>
          <div>
            {this.props.slotName}
          </div>
          <div className="higher-strength">
            14 STRENGTH REQUIRED TO USE THIS SLOT
          </div>
        </>
      )
    }else if(this.state.showNeed18Strength){
      return(
        <>
          <div>
            {this.props.slotName}
          </div>
          <div className="higher-strength">
            18 STRENGTH REQUIRED TO USE THIS SLOT
          </div>
        </>
      )
    }else{
      return this.props.slotName
    }
  }

  showItem = () => {
    if(this.isItemInSlot()){
      return <OwnedItem itemId={this.props.slot.relationships.owned_item.data.id} />
    }else{
      return this.showNoItem()
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
  characters: state.characters.characters,
  characterId: state.characters.activeCharacter,
  selectedSlot: state.slots.selectedSlot,
  ownedItems: state.ownedItems.ownedItems
})

export default connect(mapStateToProps, { showItemList, setSelectedSlot, deleteSlot, deleteOwnedItem })(Slot)