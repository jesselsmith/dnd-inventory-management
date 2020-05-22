import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './container'

class ContainerList extends Component {
  displayContainers = () => {
    return this.props.containers.map((container, i) => {
      return <Container key={i} name={container.attributes.name} numSlots={container.attributes.num_slots} />
    })
  }

  render(){
    return (
      <>
        {this.displayContainers()}
      </>
    )
  }
}

const mapStateToProps = state => ({
  containers: state.containers.containers
})

export default connect(mapStateToProps)(ContainerList)