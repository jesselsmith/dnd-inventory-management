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

  showNotches = () => {
    let item = this.getItem()
    if(this.state.showNotches){
      return (
        <div className="item-buttons" >
          <div className="notches">
            <span className="notch-text">Notches: {item.attributes.notches}</span>
            <span className="notch-btns">
              <button className="plus" key="1" onClick={this.handleNotchIncrease}>+</button>
              <button className="minus" key='2' onClick={this.handleNotchDecrease}>-</button>
            </span>
          </div>
        </div>
      )
    }
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

  displayImageOrName = () => {
    const baseItem = this.getItem().attributes.base_item
    if(baseItem.image){
      return <img className="item-img" src={require(`../../../../images/${baseItem.image}`)} alt={baseItem.name} />
    }else{
      return <h3 className="item-title">Name: {baseItem.name} </h3>
    }
  }

  render(){
    return(
      <div className="owned-item" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.displayImageOrName()}
        {this.showNotches()}
      </div>
    )  
  }
}

const mapStateToProps = state => ({
  ownedItems: state.ownedItems.ownedItems
})

export default connect(mapStateToProps, { patchOwnedItem })(OwnedItem)