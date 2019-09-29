import React, { useEffect } from 'react';
import { generateTiles } from '../lib/tileGenerator'
import Hero from './characters/Hero'
import { TILES_GENERATED } from '../actions'
import { useStateValue } from './StateProvider'

const Room = ({ level }) => {

  const [{ hero }, dispatch] = useStateValue();
  const { playerPos, tiles } = generateTiles(level)

  useEffect(() => {
    dispatch({ type: TILES_GENERATED, position: playerPos, tiles })
  }, [])

  const grid = tiles.map(row => console.log(row) ||
    <div className="room-tile-row">
      {row
        .map(Tile => <Tile />)
      }
    </div>
  )

  return (
    // @TODO RESTRUCTURE THIS POC
    <div className="game">
      <h2>Level: {level}</h2>
      <div className="room">
        {grid}
        <Hero />
      </div>

    </div>
  );
}

export default Room;
