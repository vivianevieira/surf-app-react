import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="nav-bar">
        <div className="nav-title">
          <h3><Link to="/">Surf Check</Link></h3>
        </div>
      </div>
    </header>
  )
};
