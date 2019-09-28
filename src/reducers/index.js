import heroReducer from './hero'

export const combinedReducer = ({ hero }, action) => ({
  hero: heroReducer(hero, action)
})