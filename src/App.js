import React from 'react';
import { StateProvider } from './components/StateProvider'
import { combinedReducer } from './reducers'
import { initialHeroState } from './reducers/hero'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './screens/Menu'
import Game from './screens/Game'
import Lessons from './screens/Lessons'

import './App.css';

const App = () => {

  const initialState = {
    hero: initialHeroState
  }

  return (
    <StateProvider reducer={combinedReducer} initialState={initialState}>
      <Router>
        <Route exact path="/" component={Menu} />
        <Route path="/game" component={Game} />
        <Route path="/lessons" component={Lessons} />
      </Router>
    </StateProvider>
  );
}

export default App;
