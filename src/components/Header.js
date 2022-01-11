import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

const Header = () => {
	return (
		<>
			<header className="header">
				<div>
					<Link to="/" className="headerLogo">
						<img src={Logo} alt="logo" style={{ width: "60px"}} />
						무지개 <br /> TRAVEL
					</Link>
				</div>
				<div>
					<Link className="links" to="/">
						Home
					</Link>
				</div>

				<nav className="navbar">
					<ul>
						<Link className="links" to="/login">
							Login
						</Link>
						<Link className="links" to="/signup">
							Sign Up
						</Link>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
