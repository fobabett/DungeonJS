import React from 'react'

export default ({ lesson, chapter, next, completed }) => (
  <div className="lesson">
    <h1>{lesson.title}</h1>
    <h2>{chapter.title}</h2>
    <p>{chapter.content}</p>
    <br></br>
    {chapter.task ? <p>{chapter.task}</p> : null}


    <p>{chapter.completionMessage}</p>
    <button onClick={next}>{chapter.completionMessage ? 'Next Lesson: Loops' : 'Next'}</button> 
    {completed ? <button onClick={next}>{chapter.completionMessage ? 'Next Lesson: Loops' : 'Next'}</button> : null}
  </div>
)