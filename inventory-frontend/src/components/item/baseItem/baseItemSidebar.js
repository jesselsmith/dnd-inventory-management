import React, { Component } from 'react';
import BaseItemsList from './baseItemsList'
import BaseItemSearch from './baseItemSearch'

class BaseItemSidebar extends Component {

  render(){
    return(
      <>
        <BaseItemSearch />
        <BaseItemsList />
      </>
    )
  }
}

export default BaseItemSidebar