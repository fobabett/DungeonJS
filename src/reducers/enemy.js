import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../actions/hero';
import{ TILES_GENERATED } from '../actions'

export const initialEnemyState = {
  position: {
    x: 0,
    y: 0
  }
};

// moves whenver Hero moves
// move towards hero if possible
// make sure next title is a Floor tile

const getHeroNextPos = () => {

}

const isFloorTile = () => {
  
}

const enemyReducer = (state, { type, position, heroCurrentPos, level }) => {
  switch (type) {
    case TILES_GENERATED:
      return {
        ...state,
        position
      };

    case MOVE_UP:
      return {
        ...state,
      };
    
    case MOVE_DOWN:
      return {
        ...state,
      };
    
    case MOVE_LEFT:
      return {
        ...state,
      };
    
    case MOVE_RIGHT:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default enemyReducer