import React, { useContext } from "react";
import { HomeCard } from "../component/homecard.js";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="view home-wrapper text-center">
			<h2 className="home-title">OPEN SOURCE</h2>
			<div className="content">
				<div className="rows">
					{store.examples.map(example => (
						<div key={example.example_id} className="cols home-cols">
							<HomeCard ID={example.example_id} title={example.title} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
