import { ATTACK, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, RESET } from '../actions';
import { createReducer } from './utils';

const initialState = {
  position: {
    x: 0,
    y: 0
  }
};

const handlers = {
  [MOVE_UP]: (state) => (
    {
      position: { ...state.position, y: state.y + 1 }
    }
  ),

  [MOVE_DOWN]: (state) => (
    {
      position: { ...state.position, y: state.y - 1 }
    }
  ),

  [MOVE_LEFT]: (state) => (
    {
      position: { ...state.position, x: state.x - 1 }
    }
  ),

  [MOVE_RIGHT]: (state) => (
    {
      position: { ...state.position, x: state.x + 1 }
    }
  ),

  [RESET]: () => (
    initialState
  )
};

export default createReducer(initialState, handlers);