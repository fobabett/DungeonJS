import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Editor from './components/Editor'
import Room from './components/Room'

import './App.css';

const App = () => {

  const [level, setLevel] = useState(0)

  return (
    <Provider store={store}>
      <div className="container">
        <div className="game-container">
          <div className="game">
            <Room level={level} />
          </div>
        </div>
        <Editor />
      </div>
    </Provider>
  );
}

export default App;
