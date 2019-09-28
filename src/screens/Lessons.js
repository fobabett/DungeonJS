import React, { useState } from 'react';
import Editor from '../components/Editor'
import Room from '../components/Room'
import { getLesson, getChapter, isLastChapter, isLastLesson } from '../lib/lesson'
import Lesson from '../components/Lesson'
import { useStateValue } from '../components/StateProvider'
import lessons from '../lib/lessons';

export default (props) => {
  console.log(props)
  const [level, setLevel] = useState(1)
  const [lesson, setLesson] = useState(getLesson(props.location.pathname))
  const [chapter, setChapter] = useState(getChapter(lesson, props.location.pathname))
  const [completed, setCompleted] = useState(chapter.id === 0 ? true : false)
  const [{ hero }] = useStateValue();
  const objectivePosition = chapter.answer.player_position || {}

  const playerReachedObjective = () => {
    let reachedObjective = true
    Object.keys(objectivePosition).map(pos => {
      if (hero[pos] !== objectivePosition[pos]) {
        reachedObjective = false
      }
      return pos
    })
    return reachedObjective
  }

  if(playerReachedObjective()) {
    setCompleted(true)
  }

  const next = () => {
    let nextLesson = isLastChapter(lesson, chapter) && !isLastLesson(lesson) ? getLesson(lessons[lesson.id].path) : lesson
    let nextChapter = nextLesson !== lesson ? nextLesson.chapters[0] : nextLesson.chapters[chapter.id + 1]
    setChapter(nextChapter)
    setLesson(nextLesson)
    props.history.push(`/lessons/${nextLesson.path}/${nextChapter.path}`)
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
