import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HomeCard = props => {
	return (
		<Link to={"/example/" + props.ID}>
			<div className="homecard-container">
				<h3>{props.title}</h3>
			</div>
		</Link>
	);
};

HomeCard.propTypes = {
	ID: PropTypes.string,
	title: PropTypes.string
};
