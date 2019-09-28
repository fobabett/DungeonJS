import React, { useState } from 'react';
import Editor from '../components/Editor'
import Room from '../components/Room'
import { getLesson, getChapter } from '../lib/lesson'
import Lesson from '../components/Lesson'

export default (props) => {
  console.log(props)
  const [level, setLevel] = useState(1)
  const [lesson, setLesson] = useState(getLesson(props.location.pathname))
  const [chapter, setChapter] = useState(getChapter(lesson, props.location.pathname))

  const next = () => { //@TODO: refactor this
    let nextChapter = lesson.chapters[chapter.id + 1]
    setChapter(nextChapter)
    props.history.push(`/lessons/${lesson.path}/${nextChapter.path}`)
  }

  const evaluate = (code, result) => {
    console.log(code)
    console.log(result)
    
  }

  return (
    <div className="container">
      <div className="game-container">
        <div className="game">
          <Room level={level} />
        </div>
        <div className="lesson-container">
          <Lesson
            lesson={lesson}
            chapter={chapter}
            next={next}
          />
        </div>
      </div>
      <Editor evaluate={evaluate} placeholder={chapter.example} />
    </div>

  );
}
