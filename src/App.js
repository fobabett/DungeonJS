import React, { useState } from 'react';
import Editor from './components/Editor'
import Room from './components/Room'
import { StateProvider } from './components/StateProvider'
import { combinedReducer } from './reducers'
import { initialHeroState } from './reducers/hero'

import './App.css';

const App = () => {

  const [level, setLevel] = useState(0)
  const initialState = {
    hero: initialHeroState
  }

  return (
    <StateProvider reducer={combinedReducer} initialState={initialState}>
      <div className="container">
        <div className="game-container">
          <div className="game">
            <Room level={level} />
          </div>
        </div>
        <Editor />
      </div>
    </StateProvider>
  );
}

export default App;
