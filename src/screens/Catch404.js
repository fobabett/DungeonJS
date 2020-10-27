import React from 'react'
import titleGraphic from '../assets/dungeon-title.png'

export default (props) => {

  const returnToMenu = () => {
    props.history.push("/")
  }

  return (
    <div className="title-screen">
      <img className="title-graphic" src={titleGraphic} alt="DungeonJS" />
      <p>This page doesn't exist</p>
      <button onClick={returnToMenu} className="button title-button">Return to Menu</button>
    </div>
  )
}
