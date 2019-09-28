import React, { useState } from 'react';
import Editor from '../components/Editor'
import Room from '../components/Room'

export default () => {

  const [level, setLevel] = useState(0)

  return (
    <div className="container">
      <div className="game-container">
        <div className="game">
          <Room level={level} />
        </div>
      </div>
      <Editor />
    </div>

  );
}
