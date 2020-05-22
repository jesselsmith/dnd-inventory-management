import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddContainerForm from '../container/addContainerForm'
import ContainerList from '../container/containerList'

class containerInventory extends Component {
  state = {
    showAddContainerForm: false
  }

  addExistingContainers = () => {

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
        <ContainerList />
        {this.showButtonOrForm()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  slots: state.slots.slots,
  containers: state.containers.containers
})

export default connect(mapStateToProps)(containerInventory)