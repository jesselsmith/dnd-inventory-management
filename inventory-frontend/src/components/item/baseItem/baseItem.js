import React, { Component } from 'react';
import { selectItem } from '../../../actions/baseItemActions'
import { connect } from 'react-redux'

class BaseItem extends Component {

  className = () => { 
    if(this.props.selectedItem && this.props.selectedItem.id === this.props.item.id){
      return "base-item selected-item"
    }else{
      return "base-item not-selected-item"
    }
  }

  render(){
    return(
      <div onClick={() => this.props.selectItem(this.props.item)} className={this.className()}>
        {this.props.item.attributes.name}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedItem: state.baseItems.selectedItem
})

export default connect(mapStateToProps, { selectItem })(BaseItem)