import React, { useState } from 'react'
import CodeMirror from 'react-codemirror';
import "../../node_modules/codemirror/lib/codemirror.css";
import "../../node_modules/codemirror/theme/dracula.css";
import '../../node_modules/codemirror/mode/javascript/javascript';

import { useStateValue } from './StateProvider'
import run from '../lib/codeRunner'

export const Editor = ({ chapter, placeholder, tryAgain, incorrect, completed, success, next }) => {
  const [{ room, hero, editor }, dispatch] = useStateValue();
  const [didInit, setDidInit] = useState(false)
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

  const runCode = () => run(code, chapter.precode, chapter.verify, dispatch, { tiles: room.tiles, heroPosition: hero.position })

  /* states:
   *   - Run
   *   - Running
   *   - Try Again
   *   - Success
   */
  const runButton = () => {
    let classNames = new Set(['button'])
    let label = 'Run'
    let action = runCode
    switch(true){
      case completed:
        // label = chapter.completionMessage ? chapter.completionMessage : 'Next'
        label = chapter.completionMessage ? 'Next Lesson: Loops' : 'Next'
        classNames.add('next-button')
        action = next
        break
      case success:
        label = 'Success'
        classNames.add('disabled')
        break
      case incorrect:
        label = 'Try Again'
        classNames.add('run-button')
        action = tryAgain
        break
      case editor.executing:
        label = 'Running'
        classNames.add('disabled')
        classNames.add('run-button')
        action = () => {}
        break
      default:
        classNames.add('run-button')
    }
    return <button
        disabled={!incorrect && editor.executing}
        className={Array.from(classNames).join(' ')}
        onClick={action}>{label}
      </button>
  }

  if(placeholder && !didInit) onChange(placeholder) || setDidInit(true)

  return (
    <div className='editor-container'>
      <CodeMirror value={placeholder || ''} className='editor' options={options} onChange={onChange} />
      {runButton()}
    </div>
  )
}

export default Editor
