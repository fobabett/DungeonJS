import React from 'react'

export default ({ lesson, chapter, next, completed, success, incorrect, tryAgain }) => (
  <div className="lesson">

    <h1>{lesson.title}</h1>
    <h2>{chapter.title}</h2>
    {!incorrect && !success ?
      <div>
        <p>{chapter.content}</p>
        <br></br>
        {chapter.task ? <p>{chapter.task}</p> : null}
      </div>
      : null}

    {incorrect ? <div>
      <p>Incorrect</p>
      <button onClick={tryAgain}>Try Again</button>
    </div> : null}

    {success ? <div>
      <p>Success</p>
    </div> : null}

    <p>{chapter.completionMessage}</p>
    {completed ? <button onClick={next}>{chapter.completionMessage ? 'Next Lesson: Loops' : 'Next'}</button> : null}
  </div>
)