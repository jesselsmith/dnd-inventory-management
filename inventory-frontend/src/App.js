import React, { Component } from 'react';
import './App.css';
import CharacterList from "./components/character/characterList"
import CharacterPage from "./components/character/characterPage"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { fetchCharacters } from './actions/characterActions'
import { fetchBaseItems } from './actions/baseItemActions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount = () => {
    document.title = 'Character Inventory'
    this.props.fetchCharacters()
    this.props.fetchBaseItems()
  }
  render(){
    return (
      <Router>
        <>
          <Route exact path="/">
            <h2>Characters</h2>
            <CharacterList />
          </Route>
          <Route path="/characters/:characterId" render={routerProps => <CharacterPage {...routerProps} />} />
        </>
      </Router>
    )
  }
  
}

export default connect(null, { fetchCharacters, fetchBaseItems })(App)
