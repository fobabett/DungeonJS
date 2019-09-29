import React from 'react';
import { StateProvider } from './components/StateProvider'
import { combinedReducer } from './reducers'
import { initialHeroState } from './reducers/hero'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './screens/Menu'
import Game from './screens/Game'
import Lessons from './screens/Lessons'

import './App.css';
import { initialEditorState } from './reducers/editor';

const App = () => {

  const initialState = {
    hero: initialHeroState,
    editor: initialEditorState
  }

  return (
    <StateProvider reducer={combinedReducer} initialState={initialState}>
      <Router>
        <Route exact path="/" component={Menu} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/lessons" component={Lessons} />
        <Route exact path="/lessons/:lesson/:id" component={Lessons} />
      </Router>
    </StateProvider>
  );
}

export default App;
