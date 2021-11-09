import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/csslogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar container-fluid d-flex justify-content-center">
			<Link to="/" className="navbar-brand">
				<img src={logo} alt="" width="35" height="35" />
			</Link>
		</nav>
	);
};
