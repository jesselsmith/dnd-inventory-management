import React, { Component } from 'react';
import { connect } from 'react-redux'
import OwnedItem from '../item/ownedItem/ownedItem'
import { showItemList } from '../../actions/baseItemActions'
import { setSelectedSlot } from '../../actions/slotActions'

class Slot extends Component {
  
  state = {
    showRemove: false,
    showAdd: false,
    showChargeButtons: false,
    showSelected: false
  }
  
  handleMouseEnter = event => {
    if(Boolean(this.props.slot)){
      this.setState({
        showRemove: true
      })
    }else{
      this.setState({
        showAdd: true
      })
    }
    
  }

  handleMouseLeave = event => {
    if(Boolean(this.props.slot)){
      this.setState({
        showRemove: false
      })
    }else{
      this.setState({
        showAdd: false
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
    setTimeout(() => { document.getElementById(this.id()).scrollIntoView() }, 1)
  }

  handleRemoveItem = () => {

  }

  className = () => {
    let className = `inventory-item ${this.props.encumberance}`

    if(this.props.selectedSlot && this.props.slotType === this.props.selectedSlot.kind && 
      this.props.location === this.props.selectedSlot.location){
        className += ` selected`
      }
    return className
  }

  id = () => {
    return `${this.props.slotType}-${this.props.location}`
  }

  render(){
    if(Boolean(this.props.slot)){
      return (
        <div className={this.className()} 
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <OwnedItem itemId={this.props.slot.relationships.owned_item.data.id} />
          {this.showButtons()}
        </div>
      )
    }else{
      return (
        <div className={this.className()} id={this.id()}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
           {this.props.location}
           {this.showButtons()}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  characterId: state.characters.activeCharacter,
  selectedSlot: state.slots.selectedSlot
})

export default connect(mapStateToProps, { showItemList, setSelectedSlot })(Slot)