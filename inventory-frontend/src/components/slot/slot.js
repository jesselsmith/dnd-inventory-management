import React, { Component } from 'react';
import { connect } from 'react-redux'
import OwnedItem from '../item/ownedItem/ownedItem'

class Slot extends Component {
  
  state = {
    showRemove: false,
    showAdd: false,
    showNotchButtons: false,
    showChargeButtons: false
  }
  
  handleMouseEnter = event => {
    this.setState({
      showRemove: true
    })
  }

  handleMouseLeave = event => {
    this.setState({
      showRemove: false
    })
  }

  showButtons = () => {
    const buttons = []
    if(this.state.showRemove){
      buttons.push(<button className="remove" key="0">Remove</button>)
    }
    if(this.state.showAdd){
      buttons.push(<button className="add" key='3'>Add</button>)
    }
    if(this.state.showChargeButtons){
      buttons.push(<button className="charge plus" key='4'>+</button>)
      buttons.push(<button className="charge minus" key='5'>-</button>)
    }
    return buttons
  }

  render(){
    if(Boolean(this.props.slot)){
      return (
        <div className={"inventory-item " + this.props.encumberance} 
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          Item: <OwnedItem itemId={this.props.slot.relationships.owned_item.data.id} />
          {this.showButtons()}
        </div>
      )
    }else{
      return (
        <div className={"inventory-item " + this.props.encumberance}>
           {this.props.location}
        </div>
      )
    }
  }
}

export default Slot