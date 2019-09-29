import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default ({ lesson, chapter, completed, success, incorrect }) => (
  <div className="lesson">

    <h1>{lesson.title}</h1>
    <h2>{chapter.title}</h2>
    {!incorrect && !success ?
      <div className="chapter-content">
        <p>{chapter.content}</p>
        {chapter.example ?
          <SyntaxHighlighter language="javascript">
            {chapter.example}
          </SyntaxHighlighter> : null}
        {chapter.task ? <p className='task'>{chapter.task}</p> : null}
      </div>
      : null}

    {incorrect ? <div>
      <p className="result result-incorrect">Incorrect</p>
    </div> : null}

    {success ? <div>
      <p className="result result-success">Success!</p>
    </div> : null}

    <p>{chapter.completionMessage}</p>
  </div>
)
