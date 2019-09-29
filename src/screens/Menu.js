import React from 'react'

export default (props) => {

  const lessons = () => {
    props.history.push("/lessons")
  }

  return (
    <div className="title-screen">
      <h1>[Title Here]</h1>
      <p>Learn JavaScript or test your skills</p>
      <button onClick={lessons} className="button title-button">Lessons</button>
      <div>
        <button className="button title-button disabled">Play</button>
        <span>(coming soon)</span>
      </div>
    </div>
  )
}