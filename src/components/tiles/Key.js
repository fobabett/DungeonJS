import React from 'react';

const Key = (pos) => {

  return (
    <div className={`tile tile-key x${pos.x} y${pos.y}`}>
      @
      <p>x: {pos.x} y: {pos.y}</p>
    </div>
  );
}

export default Key;
