import React, { useEffect, useState } from 'react';
import floor1 from '../../assets/floor_1.png'
import floor2 from '../../assets/floor_2.png'
import floor3 from '../../assets/floor_3.png'
import floor4 from '../../assets/floor_3.png'

const floors = [floor1, floor2, floor3, floor4]
// const floor = floors[Math.floor(Math.random() * floors.length)]

const Floor = (pos) => {
  let [floor, setFloor] = useState(floors[Math.floor(Math.random() * floors.length)])
  return (
    <img className={`tile tile-floor x${pos.x} y${pos.y}`} src={floor} />
  );
}

export default Floor;
