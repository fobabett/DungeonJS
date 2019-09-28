import React, { useState } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Player from './components/Player'
import Editor from './components/Editor'

import './App.css';

const App = () => {

  return (
    <Provider store={store}>
      <div className="container">
        <div className="game-container">
          <div className="game">
            <Player />
          </div>
        </div>
        <Editor />
      </div>
    </Provider>
  );
}

export default App;
