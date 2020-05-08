import React, { Component } from 'react';

class BaseItem extends Component {
  render(){
    return(
      <span onClick={() => this.props.selectItem(this.props.item)}>
        {this.props.item.attributes.name}
      </span>
    )
  }
}

export default BaseItem