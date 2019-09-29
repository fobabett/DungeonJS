import heroReducer from './hero'
import editorReducer from './editor'
import enemyReducer from './enemy'
import roomReducer from './room'

export const combinedReducer = ({ hero, editor, enemy, room }, action) => ({
  hero: heroReducer(hero, action),
  editor: editorReducer(editor, action),
  enemy: enemyReducer(enemy, action),
  room: roomReducer(room, action)
})