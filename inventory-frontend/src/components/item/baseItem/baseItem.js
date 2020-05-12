import React, { Component } from 'react';
import { selectItem } from '../../../actions/baseItemActions'

class BaseItem extends Component {
  render(){
    return(
      <span onClick={() => this.props.selectItem(this.props.item)}>
        {this.props.item.attributes.name}
      </span>
    )
  }
}

export default connect(null, { selectItem })(BaseItem)