import React from 'react'

export default ({ lesson, lessonSection, next }) => {

  return (
    <div className="lesson">
      <h1>{lesson.title}</h1>
      <h2>{lessonSection.title}</h2>
      <p>{lessonSection.content}</p>
      <br></br>
      {lessonSection.task ? <p>{lessonSection.task}</p> : null}


      <p>{lessonSection.completionMessage}</p>

      <button onClick={next}>{lessonSection.completionMessage ? 'Next Lesson: Loops' : 'Next'}</button>
    </div>
  )
}