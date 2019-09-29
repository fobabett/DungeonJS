import { ATTACK, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../actions/hero';
import{ TILES_GENERATED, RETRY } from '../actions'

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

const heroReducer = (state, action) => {
  switch (action.type) {
    case TILES_GENERATED:
      return {
        ...state,
        position: action.position,
        initialPosition: action.position
      };

    case MOVE_UP:
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y - 1 //y is reversed on grid
        }
      };
    
    case MOVE_DOWN:
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y + 1 //y is reversed on grid
        }
      };
    
    case MOVE_LEFT:
      return {
        ...state,
        position: {
          ...state.position,
          x: state.position.x - 1
        }
      };
    
    case MOVE_RIGHT:
      return {
        ...state,
        position: {
          ...state.position,
          x: state.position.x + 1
        }
      };
    
    case RETRY:
      return {
        ...state,
        position: state.initialPosition
      }

    default:
      return state;
  }
}

export default heroReducer