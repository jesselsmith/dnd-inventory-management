import React, { Component } from 'react';
import BaseItem from './baseItem'
import { connect } from 'react-redux';

class BaseItemList extends Component {
  displayBaseItems = () => {
    this.props.baseItems.map((baseItem, index) => {
      return <BaseItem key={index} item={baseItem} />
    })
  }

  render(){
    return(
      <>
        {this.displayBaseItems()}
      </>
    )
  }
}

const mapStateToProps = state => ({
  baseItems: state.baseItems.baseItems
})

export default connect(mapStateToProps)(BaseItemList)