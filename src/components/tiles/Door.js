import React from 'react';

const Door = (pos) => {

  return (
    <div className={`tile tile-door x${pos.x} y${pos.y}`}>D
    <p>x: {pos.x} y: {pos.y}</p>
    </div>
  );
}

export default Door;
