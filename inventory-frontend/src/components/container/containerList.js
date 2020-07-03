import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './container'
import AddContainerForm from './addContainerForm'

class ContainerList extends Component {
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
      return <AddContainerForm closeForm={() => {this.setState({showAddContainerForm: false})}} />
    }else{
      return <button onClick={this.handleAddContainer}>Add Container</button>
    }
  }

  displayContainers = () => {
    if (this.props.loading) {
      return <h2>Containers loading...</h2>
    } else {
      return this.props.containers.map((container, i) => {
        return <Container key={i} id={container.id} name={container.attributes.name} numSlots={container.attributes.num_slots} />
      })
    }
  }

  render(){
    return (
      <div>
        {this.displayContainers()}
        {this.showButtonOrForm()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  containers: state.containers.containers,
  loading: state.containers.loadingContainers,
  slots: state.slots.slots
})

export default connect(mapStateToProps)(ContainerList)