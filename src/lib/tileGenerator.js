/*
 * args:
 * - level
 *
 * returns:
 * - Array<Array<ComponentFunc>>
 *  [rows][cols][react component]
 * - player position { x, y }
 *
 *  . => none
 *    => none
 *  # => floor
 *  - => wall
 *  | => wall
 *  D => door
 *  @ => key
 *  * => player (and floor)
 */

import { levels } from './game-levels'
import { lessons } from './lessons'
import None from '../components/tiles/None'
import Floor from '../components/tiles/Floor'
import Door from '../components/tiles/Door'
import Key from '../components/tiles/Key'

const asciiTile = {
  ' ': None,
  '.': None,
  '#': Floor,
  '*': Floor, // for the purposes of rendering tiles, Hero is always floored
  'D': Door,
  '@': Key,
}

const parseTiles = asciiMap => asciiMap
  .split('\n')
  .map(row => row
    .split('')
    .map(ascii => ascii.toUpperCase())
    .map(ascii => asciiTile[ascii])
  )

const findPlayer = (level, asciiMap) => {
  const playerMustExist = asciiMap.match(/\*/g).length
  switch (true) {
    case playerMustExist === 0:
      throw new Error(`Level ${level} does not have a player starting position! (*)`)
    case playerMustExist > 1:
      throw new Error(`Level ${level} has multiple player starting positions! (*)`)
    default:
      return asciiMap
        .split('\n')
        .reduce((playerPos, row, y) => playerPos ? playerPos :
          row.indexOf('*') >= 0 ?
            { y, x: row.indexOf('*') } :
            playerPos
          , null
        )
  }
}

export const generateTiles = (level, lesson) => {
  console.log(lesson)
  if (level || lesson) {
    return {
      tiles: parseTiles(
        level ? levels[level].room : lesson.chapters[0].map
      ),
      playerPos: findPlayer(
        level ? level : lesson.id,
        level ? levels[level] : lesson.chapters[0].map
      )
    }
  } else {
    return { tiles: null, playerPos: null }
  }
}

