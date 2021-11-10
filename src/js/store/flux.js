import React from "react";
import { CoolCard } from "../component/coolcard";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			examples: [
				{
					example_id: "1",
					title: "Cool Animated Card",
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
			// Some actions...
		}
	};
};

export default getState;
