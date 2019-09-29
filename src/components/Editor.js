import React, { useState } from 'react'
import CodeMirror from 'react-codemirror';
import "../../node_modules/codemirror/lib/codemirror.css";
import "../../node_modules/codemirror/theme/dracula.css";
import '../../node_modules/codemirror/mode/javascript/javascript';

import { useStateValue } from './StateProvider'
import run from '../lib/codeRunner'

export const Editor = ({ placeholder, tryAgain, incorrect }) => {
  const [{ room, hero, editor }, dispatch] = useStateValue();
  let [code, setCode] = useState()
  let options = {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'dracula',
    height: '100%'
  }

  const onChange = (val) => {
    setCode(val.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm, ""))
  }

  const runCode = () => run(code, dispatch, { tiles: room.tiles, heroPosition: hero.position })

  return (
    <div className='editor-container'>
      <CodeMirror className='editor' options={options} onChange={onChange} />
      {!incorrect
        ? <button disabled={editor.executing} className={`button run-button ${editor.executing ? 'disabaled' : ''}`} onClick={runCode}>{editor.executing ? 'Running' : 'Run'}</button>
        : <button className="button run-button" onClick={tryAgain}>Try Again</button>}
    </div>
  )
}

export default Editor
