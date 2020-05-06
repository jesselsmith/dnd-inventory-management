import React, { Component } from 'react';
import { connect } from 'react-redux'

class BaseItemSearch extends Component {
  render(){
    return(
      <>
        <form>
          <input type="text" />
        </form>
      </>
    )
  }
}

export default connect()(BaseItemSearch)