import React from 'react'
import { join } from 'path'
import { lessons } from '../lib/lessons'
import titleGraphic from '../assets/dungeon-title.png'

export default (props) => {

  const navigateToLesson = (lessonPath, chapterPath) => () => {
    props.history.push(join("/lessons", lessonPath, chapterPath))
  }

  const navigateToMenu = () => {
    props.history.push("/")
  }

  return (
    <div className="title-screen">
      <img className="title-graphic" src={titleGraphic} alt="DungeonJS" />
      <p>Choose an adventure!</p>
      {
        lessons.map(({ title, path, chapters }) =>
          <button onClick={navigateToLesson(path, chapters[0].path)} className="button title-button">{title}</button>
        )
      }
      <div>
        <button onClick={navigateToMenu} className="button title-button button-bg2">Back</button>
      </div>
    </div>
  )
}
