import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/csslogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid d-flex justify-content-center">
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="" width="30" height="30" />
				</Link>
			</div>
		</nav>
	);
};
