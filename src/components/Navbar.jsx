import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to={"/cat-fact"}>Cat Fact</Link></li>
        <li><Link to={"/cat-images"}>Cat Random Images</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
