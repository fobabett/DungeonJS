import React from 'react';
import { StateProvider } from './components/StateProvider'
import { combinedReducer } from './reducers'
import { initialHeroState } from './reducers/hero'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './screens/Menu'
import LessonsMenu from './screens/LessonsMenu'
// import Game from './screens/Game'
import Lessons from './screens/Lessons'

import './App.css';
import { initialEditorState } from './reducers/editor'
import { initialEnemyState } from './reducers/enemy'
import { initialRoomState } from './reducers/room'


const App = () => {

  const initialState = {
    hero: initialHeroState,
    editor: initialEditorState,
    enemy: initialEnemyState,
    room: initialRoomState
  }

  return (
    <StateProvider className='app' reducer={combinedReducer} initialState={initialState}>
      <Router>
        <Route exact path="/" component={Menu} />
        {/* <Route exact path="/game" component={Game} /> */}
        <Route exact path="/lessons" component={LessonsMenu} />
        <Route exact path="/lessons/:lesson/:id" component={Lessons} />
      </Router>
    </StateProvider>
  );
}

export default App;
