import React from 'react';
import './App.css';
import CharacterList from "./components/character/characterList"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/">
          <CharacterList />
        </Route>
      </>
    </Router>
  );
}

export default App;
