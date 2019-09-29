import heroReducer from './hero'
import editorReducer from './editor'
import enemyReducer from './editor'

export const combinedReducer = ({ hero, editor, enemy }, action) => ({
  hero: heroReducer(hero, action),
  editor: editorReducer(editor, action),
  enemy: enemyReducer(enemy, action)
})