import React from "react";
import { CoolCard } from "../component/coolcard";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			examples: [
				{
					example_id: "1",
					title: "Cool Animated Cards",
					html: <CoolCard />
				},
				{
					example_id: "2",
					title: "Second cool example",
					html: <h3>Example 2</h3>
				},
				{
					example_id: "3",
					title: "Third more cool example",
					html: <h3>Example 3</h3>
				},
				{
					example_id: "4",
					title: "Fourth less cool example",
					html: <h3>Example 4</h3>
				},
				{
					example_id: "5",
					title: "Fifth example",
					html: <h3>Example 5</h3>
				},
				{
					example_id: "6",
					title: "Sixth example",
					html: <h3>Example 6</h3>
				}
			]
		},
		actions: {
			// setAnimation: id => {
			// 	const store = getStore();
			// 	// Update examples
			// 	let storeAux = {};
			// 	storeAux.examples = store.examples.map(element => {
			// 		if (element.example_id === id) {
			// 			element.animation = !element.animation;
			// 		}
			// 		return element;
			// 	});
			// 	setStore(storeAux);
			// }
		}
	};
};

export default getState;
