import React from 'react'
import { Link } from "react-router-dom";

export default () => {

  return (
    <div>
      <h1>[Title Here]</h1>
      {/* <Link>Lessons</Link> */}
      <Link to='/game'>Play</Link>
    </div>
  )
}