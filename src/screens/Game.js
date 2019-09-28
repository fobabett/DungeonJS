import React, { useState } from 'react';
import Editor from '../components/Editor'
import Room from '../components/Room'

export default () => {

  const [level, setLevel] = useState(0)

  const evaluate = (code, result) => {
    console.log('evaluate code', code)
    console.log('evaluate result', result)
  }

  return (
    <div className="container">
      <div className="game-container">
        <div className="game">
          <Room level={level} />
        </div>
      </div>
      <Editor evaluate={evaluate} />
    </div>

  );
}
