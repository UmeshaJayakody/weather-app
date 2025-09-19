import React from 'react'
import './TopNav.css'

const TopNav = ({ user, onLogout }) => {
  return (
    <nav className="top-nav">
      <div className="nav-content">
        <div className="user-greeting">
          Hi {user?.name || 'User'}
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </nav>
  )
}

export default TopNav