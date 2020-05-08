import React, { Component } from 'react';
import BaseItemsList from './baseItemsList'
import BaseItemSearch from './baseItemSearch'
import { connect } from 'react-redux';
import { hideItemList } from '../../../actions/baseItemActions'

class BaseItemSidebar extends Component {

  handleAdd = () => {
    
  }

  render(){
    return(
      <div className="item-sidebar">
        <h3>Add Item</h3>
        <BaseItemSearch />
        <BaseItemsList />
        <button onClick={ () => this.props.hideItemList() } >Cancel</button>
        <button onClick={this.handleAdd()} >Add Item</button>
      </div>
    )
  }
}

export default connect(null, { hideItemList })(BaseItemSidebar)