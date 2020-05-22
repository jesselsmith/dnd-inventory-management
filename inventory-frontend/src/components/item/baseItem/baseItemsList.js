import React, { Component } from 'react';
import BaseItem from './baseItem'
import { connect } from 'react-redux';

class BaseItemsList extends Component {
  displayBaseItems = () => {
    return this.props.baseItems.map((baseItem, index) => {
      return (<div key={index}><BaseItem item={baseItem} /></div>)
    })
  }

  render(){
    return(
      <div className="item-list">
        {this.displayBaseItems()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  baseItems: state.baseItems.baseItems
})

export default connect(mapStateToProps)(BaseItemsList)