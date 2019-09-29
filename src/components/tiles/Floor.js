import React from 'react';

const Floor = (pos) => {

  return (
    <div className={`tile tile-floor x${pos.x} y${pos.y}`}>#
    <p>x: {pos.x} y: {pos.y}</p>
    </div>
  );
}

export default Floor;
