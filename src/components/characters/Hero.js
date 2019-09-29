import React from 'react';

const Hero = ({ pos }) => {
  return (
    <div className={`tile hero x${pos.x} y${pos.y}`}>Hero</div>
  );
}

export default Hero;
