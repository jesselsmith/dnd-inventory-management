import React, { Component } from 'react';

class BaseItem extends Component {
  render(){
    return(
      <>
        {this.props.item.attributes.name}
      </>
    )
  }
}

export default BaseItem