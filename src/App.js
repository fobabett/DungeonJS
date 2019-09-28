import React from 'react';
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

  const onChange = (val) => {
    console.log(val)
  }

  return (
    <div>
      <CodeMirror className='editor' options={options} onChange={onChange} />
    </div>
  );
}

export default App;
