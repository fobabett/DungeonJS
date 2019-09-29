import React from 'react'
import titleGraphic from '../assets/dungeon-title.png'

export default (props) => {

  const lessons = () => {
    props.history.push("/lessons")
  }

  return (
    <div className="title-screen">
      <img className="title-graphic" src={titleGraphic} alt="DungeonJS" />
      <p>Learn JavaScript or test your skills</p>
      <button onClick={lessons} className="button title-button">Lessons</button>
      <div>
        <button className="button title-button disabled">Play</button>
        <p className="coming-soon">(coming soon)</p>
      </div>
    </div>
  )
}