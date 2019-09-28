import React, { useState } from 'react';
import './App.css';
import CodeMirror from 'react-codemirror';
import Room from './components/Room';
import "../node_modules/codemirror/lib/codemirror.css";
import "../node_modules/codemirror/theme/dracula.css";
import '../node_modules/codemirror/mode/javascript/javascript';

const App = () => {
  let [level, setLevel] = useState(0)
  let [code, setCode] = useState()
  let options = {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'dracula'
  }

  const moveUpTest = () => {
    return 1;
  }

  const onChange = (val) => {
    setCode(val.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm,""))
  }

  const run = () => {
    try {
      var result = (() => { return eval(code)})()
      console.log(result)
      //calling moveUpTest in browser: result = 1

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <div className="game-container">
        <Room level={level} />
        <button onClick={run}>Run</button>
      </div>
      <div className='editor-container'>
        <CodeMirror className='editor' options={options} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
