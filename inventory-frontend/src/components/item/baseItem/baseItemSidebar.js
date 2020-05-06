import React, { Component } from 'react';
import BaseItemsList from './baseItemsList'
import BaseItemSearch from './baseItemSearch'

class BaseItemSidebar extends Component {

  render(){
    return(
      <div className="item-sidebar">
        <BaseItemSearch />
        <BaseItemsList />
      </div>
    )
  }
}

export default BaseItemSidebar