import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiPlay } from "react-icons/fi";
import "../../styles/example.scss";
import { Context } from "../store/appContext";

export const Example = () => {
	const { store, actions } = useContext(Context);
	const [content, setContent] = useState(<></>);
	const [title, setTitle] = useState("Example");
	const params = useParams();

	useEffect(() => {
		store.examples.map(example => {
			if (example.example_id == params.id) {
				setContent(example.html);
				setTitle(example.title);
			}
		});
	}, []);

	return (
		<div className="view">
			<div className="example-container">
				<h3 className="example-title">{title}</h3>
				<div className="example-content">{content}</div>
			</div>
		</div>
	);
};
