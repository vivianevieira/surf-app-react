import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
  route: "/",
  icon: faHome,
  label: "Home"
},{
  route: "/favorites",
  icon: faHeart,
  label: "Favorites"
}]

export default function Footer() {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-container">
        {tabs.map((tab, index) => (
          <NavLink to={tab.route} exact={true} className="bottom-nav-links" activeClassName="bottom-nav-links-active" key={`tab-${index}`}>
            <div>
              <FontAwesomeIcon size="lg" icon={tab.icon} />
              <div>{tab.label}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
};
