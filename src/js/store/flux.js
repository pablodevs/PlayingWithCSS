const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			examples: [
				{
					title: "Cool animated card",
					example_id: 1
				},
				{
					title: "another example...",
					example_id: 2
				}
			]
		},
		actions: {
			// Some actions...
		}
	};
};

export default getState;
