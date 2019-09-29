import React from 'react';
// import Spritesheet from 'react-responsive-spritesheet';
// import heroIdle from '../../assets/hero_idle.png'
import heroIdle from '../../assets/hero-idle.gif'
const Hero = ({ pos }) => {
  return (
    // <div className={`tile hero x${pos.x} y${pos.y}`}><Spritesheet
    //   className={`hero-sprite`}
    //   image={heroIdle}
    //   widthFrame={50}
    //   heightFrame={88}
    //   steps={4}
    //   fps={12}
    //   loop={true}
    // /></div> //
    <img className={`tile hero x${pos.x} y${pos.y}`} src={heroIdle} />
  );
}

export default Hero;
