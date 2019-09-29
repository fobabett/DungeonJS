import React from 'react';
import door from '../../assets/door.png'

const Door = (pos) => {

  return (
    <img className={`tile tile-door x${pos.x} y${pos.y}`} src={door} />
  );
}

export default Door;
