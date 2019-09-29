import React from 'react'
import { Link } from "react-router-dom";

export default () => {

  return (
    <div className="title-screen">
      <h1>[Title Here]</h1>
      <p>Learn JavaScript or test your skills</p>
      <Link className="button" to='/lessons'>Lessons</Link>
      <Link className="button disabled">Play <span>Coming Soon</span></Link>
    </div>
  )
}