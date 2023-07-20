import {Link} from 'react-router-dom'
import './Public.css'
import React from 'react'

const Public = () => {
  return (
    <div className='public-wrapper'>
      <header className='public-header'>
        <h1 className="public-logo">pTemplate</h1>
        <Link to='/login' className='login-btn'>Login</Link>
      </header>
    </div>
  )
}

export default Public