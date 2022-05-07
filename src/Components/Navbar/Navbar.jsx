import React from 'react'
import "../Navbar/Navbar.css"
//add logo and docs
const Navbar=()=> {
  return (
    <nav className='navbar'>
      <div className="logo">Summarizer</div>
      <div className="action-links">Docs</div>
    </nav>
  )
}

export default Navbar