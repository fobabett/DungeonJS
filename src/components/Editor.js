import React, { useState, useContext } from 'react'
import CodeMirror from 'react-codemirror';
import "../../node_modules/codemirror/lib/codemirror.css";
import "../../node_modules/codemirror/theme/dracula.css";
import '../../node_modules/codemirror/mode/javascript/javascript';

import { useStateValue } from './StateProvider'

export const Editor = () => {

  let [code, setCode] = useState()
  let options = {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'dracula'
  }

  const onChange = (val) => {
    setCode(val.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm, ""))
  }

  const run = () => {
    try {
      var result = (() => { return eval(code) })()
      console.log(result)
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='editor-container'>
      <CodeMirror className='editor' options={options} onChange={onChange} />
      <button onClick={run}>Run</button>
    </div>
  )
}

export default Editor