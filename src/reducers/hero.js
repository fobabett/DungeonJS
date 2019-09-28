import { ATTACK, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../actions/hero';
import{ TILES_GENERATED } from '../actions'

export const initialHeroState = {
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
        position: action.position
      };

    case MOVE_UP:
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y + 1
        }
      };
    
    case MOVE_DOWN:
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y - 1
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

    default:
      return state;
  }
}

export default heroReducer