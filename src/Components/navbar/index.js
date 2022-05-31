import React, {useEffect, useState} from 'react'
import {Link, Router} from "react-router-dom"
import './styles.css'

const NavBar = () => {

  const [currentLocation, setCurrentLocation] = useState("/");

  const locations = ["", "Projects", "Resume", "Gallery", "Construction"];

  return (
		<nav id="nav">
			<Link to="/">
				<div className="site-name">
					<img className="NavLogo" src="/Logo_001.svg" alt="logo" />
					Zane Maklin
				</div>
			</Link>
			<ul>
				{locations.map((location) => (
					<NavItem
						location={location}
						setCurrentLocation={setCurrentLocation}
						currentLocation={currentLocation}
					/>
				))}
			</ul>
		</nav>
  );
}


const NavItem = ({ location, setCurrentLocation, currentLocation }) => {
	return (
		<li>
			<Link
				onClick={() => setCurrentLocation(location)}
				to={`/${location}`}
        id={location===currentLocation ? "clicked" : ""}
			>
				{location}
			</Link>
		</li>
	);
};

export default NavBar;
