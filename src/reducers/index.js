import heroReducer from './hero'
import editorReducer from './editor'

export const combinedReducer = ({ hero, editor }, action) => ({
  hero: heroReducer(hero, action),
  editor: editorReducer(editor, action)
})