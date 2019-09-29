import React, { useState, useContext } from 'react'
import CodeMirror from 'react-codemirror';
import "../../node_modules/codemirror/lib/codemirror.css";
import "../../node_modules/codemirror/theme/dracula.css";
import '../../node_modules/codemirror/mode/javascript/javascript';

import { useStateValue } from './StateProvider'
import run from '../lib/codeRunner'

export const Editor = ({ placeholder }) => {
  const [{ room, hero, editor }, dispatch] = useStateValue();
  let [code, setCode] = useState()
  let options = {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'dracula'
  }

  const onChange = (val) => {
    setCode(val.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm, ""))
  }

  const runCode = () => run(code, dispatch, { tiles: room.tiles, heroPosition: hero.position })

  return (
    <div className='editor-container'>
      <CodeMirror value={placeholder || ''} className='editor' options={options} onChange={onChange} />
      {!editor.executing ? <button onClick={runCode}>Run</button> : null}
    </div>
  )
}

export default Editor
