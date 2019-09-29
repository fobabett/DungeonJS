import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default ({ lesson, chapter, next, completed, success, incorrect }) => (
  <div className="lesson">

    <h1>{lesson.title}</h1>
    <h2>{chapter.title}</h2>
    {!incorrect && !success ?
      <div>
        <p>{chapter.content}</p>
        <br></br>
        {chapter.example ?
          <SyntaxHighlighter language="javascript">
            {chapter.example}
          </SyntaxHighlighter> : null}
        {chapter.task ? <p className='task'>{chapter.task}</p> : null}
      </div>
      : null}

    {incorrect ? <div>
      <p>Incorrect</p>
    </div> : null}

    {success ? <div>
      <p>Success</p>
    </div> : null}

    <p>{chapter.completionMessage}</p>
    {completed ? <button className="button next-button" onClick={next}>{chapter.completionMessage ? 'Next Lesson: Loops' : 'Next'}</button> : null}
  </div>
)