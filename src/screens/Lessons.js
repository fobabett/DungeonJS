import React, { useState } from 'react';
import Editor from '../components/Editor'
import Room from '../components/Room'
import { getLesson, getLessonSection } from '../lib/lesson'
import Lesson from '../components/Lesson'

export default (props) => {
  console.log(props)
  const [level, setLevel] = useState(0)
  const [lesson, setLesson] = useState(getLesson(props.location.pathname))
  const [lessonSection, setLessonSection] = useState(getLessonSection(lesson, props.location.pathname))

  const next = () => {
    let nextSection = lesson.sections[lessonSection.id + 1]
    setLessonSection(nextSection)
    props.history.push(`/lessons/${lesson.path}/${nextSection.path}`)
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
            lessonSection={lessonSection}
            next={next}
          />
        </div>
      </div>
      <Editor placeholder={lessonSection.example} />
    </div>

  );
}
