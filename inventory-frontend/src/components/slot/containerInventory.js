import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddContainerForm from './addContainerForm'

class containerInventory extends Component {
  state = {
    showAddContainerForm: false
  }

  handleAddContainer = () => {
    this.setState({
      showAddContainerForm: true
    })
  }

  showButtonOrForm = () => {
    if(this.state.showAddContainerForm){
      return <AddContainerForm />
    }else{
      return <button onClick={this.handleAddContainer}>Add Container</button>
    }
  }

  render(){
    return (
      <div>
        <h4>Container Inventory</h4>
        {this.showButtonOrForm()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  slots: state.slots.slots
})

export default connect(mapStateToProps)(containerInventory)