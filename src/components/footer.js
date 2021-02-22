import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
  // route: "/home",
  icon: faHome,
  label: "Home"
},{
  // route: "/login",
  icon: faHeart,
  label: "Favorites"
}]

export default function Footer() {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-container">
        {tabs.map((tab, index) => (
        <div className="bottom-nav-tabs" key={`tab-${index}`}>
          <FontAwesomeIcon size="lg" icon={tab.icon} />
          <div>{tab.label}</div>
        </div>
        ))}
      </div>
    </div>
  )
};
