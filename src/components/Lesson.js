import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default ({ lesson, chapter, completed, success, incorrect, error, showHelpButton, showHelpButtonClicked, showHelp }) => (
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
      <p className="result result-incorrect">
        Incorrect
      </p>
      <p className="result result-incorrect">
        {error && error.toString()}
      </p>
      {showHelpButton &&
        <p className="result">Need some help?
          <button onClick={showHelpButtonClicked} className="button button-small button-bg3" style={{marginLeft: "10px", marginTop: "10px", borderBottom: "4px solid #333" }}>Show Solution</button>
        </p>
      }
      {showHelp &&
        <div className="help-container">
          <p>Write the following script the code editor on the right and try again.</p>
          <SyntaxHighlighter language="javascript">
            {chapter.help}
          </SyntaxHighlighter>
        </div>
      }
    </div> : null}

    {success ? <div>
      <p className="result result-success">Success!</p>
    </div> : null}

    {completed ? <p>{chapter.completionMessage}</p> : null}
  </div>
)
