import React, { useState } from 'react';
import Editor from '../components/Editor'
import Room from '../components/Room'
import { getLesson, getChapter } from '../lib/lesson'
import Lesson from '../components/Lesson'
import { useStateValue } from '../components/StateProvider'

export default (props) => {
  console.log(props)
  const [level, setLevel] = useState(1)
  const [lesson, setLesson] = useState(getLesson(props.location.pathname))
  const [chapter, setChapter] = useState(getChapter(lesson, props.location.pathname))
  const [completed, setCompleted] = useState(chapter.id === 0 ? true : false)
  const [{ hero }] = useStateValue();

  const next = () => { //@TODO: refactor this
    let nextChapter = lesson.chapters[chapter.id + 1]
    setChapter(nextChapter)
    props.history.push(`/lessons/${lesson.path}/${nextChapter.path}`)
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
            completed={completed}
          />
        </div>
      </div>
      <Editor placeholder={chapter.example} />
    </div>

  );
}
