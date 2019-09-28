import React, { useEffect } from 'react';
import './App.css';
import CodeMirror from 'react-codemirror';
import "../node_modules/codemirror/lib/codemirror.css";
import "../node_modules/codemirror/theme/dracula.css";
import '../node_modules/codemirror/mode/javascript/javascript';

const App = () => {
  let options = {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'dracula'
  }

  useEffect(() => {
    // CodeMirror.setSize("100%", "100%")
  }, [])

  const onChange = (val) => {
    console.log(val)
  }

  return (
    <div className="container">
      <div className="game-container">
        <div className="game">Game Here</div>
      </div>
      <div className='editor-container'> 
        <CodeMirror className='editor' options={options} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
