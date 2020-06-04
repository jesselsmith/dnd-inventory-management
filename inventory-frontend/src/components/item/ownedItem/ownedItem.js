import React, { Component } from 'react';
import { connect } from 'react-redux'
import { patchOwnedItem } from '../../../actions/ownedItemActions'

class OwnedItem extends Component {
  state = {
    showNotches: false
  }

  getItem = () => {
    return this.props.ownedItems.find(item => item.id === this.props.itemId)
  }

  handleMouseEnter = () => {
    this.setState({
      showNotches: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      showNotches: false
    })
  }

  showItemCounter = counterType => {
    let item = this.getItem()
    if(this.state.showNotches && (counterType === "Notches" || item.attributes.hasCharges)){
      return (
        <div className={`item-buttons ${counterType.toLowerCase()}`}>
          <div className="item-counter">
              <span className="item-counter-text">{counterType}: {(counterType === "Notches" ? item.attributes.notches : item.attributes.charges)}</span>
              <span className="item-counter-btns">
              <button className={`${counterType.toLowerCase()} plus`} key="1" onClick={this.handleCounterIncrease}>+</button>
              <button className={`${counterType.toLowerCase()} minus`} key='2' onClick={this.handleCounterDecrease}>-</button>
            </span>
          </div>
      </div>
      )
    }
  }

  handleCounterIncrease = event => {
    let item = this.getItem()
    let patchOptions = { id: this.props.itemId }
    if(event.target.classList.contains("notches")){
      patchOptions["notches"] = item.attributes.notches + 1 
    } else{
      patchOptions["charges"] = item.attributes.charges + 1
    }
    this.props.patchOwnedItem(patchOptions)
  }

  handleCounterDecrease = event => {
    let item = this.getItem()
    let patchOptions = { id: this.props.itemId }
    if(event.target.classList.contains("notches")){
      patchOptions["notches"] = item.attributes.notches - 1 
    } else{
      patchOptions["charges"] = item.attributes.charges - 1
    }
    this.props.patchOwnedItem(patchOptions)
  }

  displayImageOrName = () => {
    const baseItem = this.getItem().attributes.base_item
    let imagePath = false
    if(baseItem.image){
      try{
        imagePath = require(`../../../../images/${baseItem.image}`)
      }catch(err){
      }
    }
    if(baseItem.image && imagePath){
      return <img className="item-img" src={require(`../../../../images/${baseItem.image}`)} alt={baseItem.name} />
    }else{
      return <h3 className="item-title">Name: {baseItem.name} </h3>
    }
  }

  render(){
    return(
      <div className="owned-item" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.displayImageOrName()}
        {this.showItemCounter("Charges")}
        {this.showItemCounter("Notches")}
      </div>
    )  
  }
}

const mapStateToProps = state => ({
  ownedItems: state.ownedItems.ownedItems
})

export default connect(mapStateToProps, { patchOwnedItem })(OwnedItem)