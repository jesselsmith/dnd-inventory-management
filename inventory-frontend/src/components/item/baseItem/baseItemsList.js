import React, { Component } from 'react';
import BaseItem from './baseItem'
import { connect } from 'react-redux';
import BaseItemSearch from './baseItemSearch'

class BaseItemList extends Component {
  displayBaseItems = () => {
    this.props.baseItems.map(baseItem => {
      return <BaseItem item={baseItem} />
    })
  }

  render(){
    return(
      <>
        <BaseItemSearch />
        {this.displayBaseItems()}
      </>
    )
  }
}

const mapStateToProps = state => ({
  baseItems: state.baseItems.baseItems
})

export default connect(mapStateToProps)(BaseItemList)