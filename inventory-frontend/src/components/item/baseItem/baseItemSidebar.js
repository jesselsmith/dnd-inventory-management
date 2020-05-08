import React, { Component } from 'react';
import BaseItemsList from './baseItemsList'
import BaseItemSearch from './baseItemSearch'
import { connect } from 'react-redux';
import { hideItemList } from '../../../actions/baseItemActions'

class BaseItemSidebar extends Component {

  handleAdd = () => {

  }

  handleCancel = () => {
    this.props.hideItemList()
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
  selectedSlot: state.slots.selectedSlot
})

export default connect(mapStateToProps, { hideItemList })(BaseItemSidebar)