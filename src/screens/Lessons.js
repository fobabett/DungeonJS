import React, { useState, useEffect } from 'react';
import Editor from '../components/Editor'
import Room from '../components/Room'
import { getLesson, getChapter, isLastChapter, isLastLesson } from '../lib/lesson'
import Lesson from '../components/Lesson'
import { useStateValue } from '../components/StateProvider'
import lessons from '../lib/lessons';
import { RETRY, SUCCESS, REFRESH } from '../actions';

export default (props) => {
  const [level, setLevel] = useState(1)
  const [lesson, setLesson] = useState(getLesson(props.location.pathname))
  const [chapter, setChapter] = useState(getChapter(lesson, props.location.pathname))
  const [completed, setCompleted] = useState(chapter.id === 0 ? true : false)
  const [success, setSuccess] = useState(false)
  const [{ hero, editor, enemy }, dispatch] = useStateValue();
  const objectivePosition = chapter.id !== 0 && chapter.answer ? chapter.answer.player_position : null
  const [incorrect, setIncorrect] = useState(false)

  const playerReachedObjective = () => {
    let reachedObjective = true
    if (objectivePosition) {
      Object.keys(objectivePosition).map(pos => {
        if (hero.position[pos] !== objectivePosition[pos]) {
          reachedObjective = false
        }
        return pos
      })
    }
    return reachedObjective
  }

  if (editor.executed && !incorrect && !completed) {
    if (objectivePosition) {
      if (playerReachedObjective()) {
        dispatch({ type: SUCCESS })
        setCompleted(true)
        setSuccess(true)
      } else {
        setIncorrect(true)
      }
    } else if(editor.success) {
      setCompleted(true)
      setSuccess(true)
    } else {
      setIncorrect(true)
    }
  }

  const next = () => {
    let nextLesson = isLastChapter(lesson, chapter) && !isLastLesson(lesson) ? getLesson(lessons[lesson.id].path) : lesson
    let nextChapter = nextLesson !== lesson ? nextLesson.chapters[0] : nextLesson.chapters[chapter.id + 1]
    setChapter(nextChapter)
    setLesson(nextLesson)
    setCompleted(false)
    setSuccess(false)
    dispatch({ type: REFRESH })
    props.history.push(`/lessons/${nextLesson.path}/${nextChapter.path}`)
  }

  const tryAgain = () => {
    setIncorrect(false)
    dispatch({ type: RETRY })
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
            completed={completed}
            incorrect={incorrect}
            success={success}
          />
        </div>
      </div>
      <Editor
        chapter={chapter}
        completed={completed}
        incorrect={incorrect}
        success={success}
        tryAgain={tryAgain}
        next={next}
        placeholder={chapter.placeholder}
      />
    </div>

  );
}
