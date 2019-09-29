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
  let [buttonLabel, setButtonLabel] = useState('Run')
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


  const runButton = () => {
    let className = 'button run-button'
    if (incorrect) {
      return <button className={className} onClick={tryAgain}>Try Again</button>;
    } else {
      const label = editor.executing ? 'Running' : 'Run'
      if(editor.executing) className += ' disabled'
      return <button disabled={editor.executing} className={className} onClick={runCode}>{label}</button>;
    }
  }

  return (
    <div className='editor-container'>
      <CodeMirror className='editor' options={options} onChange={onChange} />
      {runButton()}
    </div>
  )
}

export default Editor
