import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from '../actions/hero';
import { TILES_GENERATED } from '../actions'

export const initialEnemyState = {
  position: null
};

// moves whenver Hero moves
// move towards hero if possible
// make sure next title is a Floor tile

const isFloorTile = (tiles, position) => {
  let floorTile = false
  tiles.map((row, y) => {
    row.map((tile, x) => {
      if (position.x === x && position.y === y && tile.name === 'Floor') {
        floorTile = true
      }
    })
    return row
  })
  return floorTile
}

const randomAxis = (pos) => {
  var keys = Object.keys(pos)
  return keys[Math.floor(Math.random() * keys.length)]
}

const getAvailableTile = (tiles, position) => {
  for (var key in position) {
    if (isFloorTile(tiles, { ...position, [key]: position[key] + 1 })) {
      return { ...position, [key]: position[key] + 1 }
    }
    if (isFloorTile(tiles, { ...position, [key]: position[key] - 1 })) {
      return { ...position, [key]: position[key] - 1 }
    }
  }
}

const getCoordinate = (currentPos, heroPosition, axis) => currentPos[axis] > heroPosition[axis] ? currentPos[axis] - 1 : currentPos[axis] + 1

const moveEnemy = (state, heroPosition, tiles) => {
  let currentPos = state.position
  if (currentPos === null) return
  let axis = randomAxis(currentPos) //returns 'x' or 'y'
  let newPos = { ...currentPos, [axis]: getCoordinate(currentPos, heroPosition, axis) }

  // Move towards hero
  if (isFloorTile(tiles, newPos)) {
    return newPos
  } else {
    axis = axis === 'x' ? 'y' : 'x'
    let newPos = { ...currentPos, [axis]: getCoordinate(currentPos, heroPosition, axis) }
    if (isFloorTile(tiles, newPos)) {
      return newPos
    }
  }

  // Move to next available tile
  return getAvailableTile(tiles, currentPos)
}

const enemyReducer = (state, { type, position, heroPosition, tiles }) => {
  switch (type) {
    case TILES_GENERATED:
      return {
        ...state,
        // position
      };

    case MOVE_UP:

      return {
        ...state,
        position: moveEnemy(state, heroPosition, tiles)
      };

    case MOVE_DOWN:
      return {
        ...state,
        position: moveEnemy(state, heroPosition, tiles)
      };

    case MOVE_LEFT:
      return {
        ...state,
        position: moveEnemy(state, heroPosition, tiles)
      };

    case MOVE_RIGHT:
      return {
        ...state,
        position: moveEnemy(state, heroPosition, tiles)
      };

    default:
      return state;
  }
}

export default enemyReducer