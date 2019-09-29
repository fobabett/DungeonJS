import { ATTACK, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../actions/hero';
import { TILES_GENERATED, RETRY, RESET } from '../actions'

export const initialHeroState = {
  initialPosition: {
    x: 0,
    y: 0
  },
  position: {
    x: 0,
    y: 0
  }
};

const isInBounds = (position) => position.y > -1 && position.x < 10 && position.x > -1

const heroReducer = (state, action) => {
  let x
  let y
  switch (action.type) {
    case TILES_GENERATED:
      return {
        ...state,
        position: action.position,
        initialPosition: action.position
      };

    case MOVE_UP:
      y = state.position.y - 1  //y is reversed on grid
      return {
        ...state,
        position: isInBounds({ ...state.position, y }) ? { ...state.position, y } : state.position
      };

    case MOVE_DOWN:
      y = state.position.y + 1  //y is reversed on grid
      return {
        ...state,
        position: isInBounds({ ...state.position, y }) ? { ...state.position, y } : state.position
      };

    case MOVE_LEFT:
      x = state.position.x - 1
      return {
        ...state,
        position: isInBounds({ ...state.position, x }) ? { ...state.position, x } : state.position
      };

    case MOVE_RIGHT:
      x = state.position.x + 1
      return {
        ...state,
        position: isInBounds({ ...state.position, x }) ? { ...state.position, x } : state.position
      };

    case RETRY:
      return {
        ...state,
        position: state.initialPosition
      }

    case RESET:
      return {
        ...state,
        position: state.initialPosition
      }

    default:
      return state;
  }
}

export default heroReducer