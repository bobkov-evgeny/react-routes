import React from "react";
import { useHistory } from "react-router";

const Post = ({ posts, id }) => {
	const history = useHistory();
	const getPostById = (id) => {
		return posts.find((post) => post.id.toString() === id);
	};
	const post = getPostById(id);
	const handleSave = () => {
		history.replace("/posts");
	};
	return (
		<>
			<h2>{post ? post.label : `Пост с id ${id} не найден`}</h2>
			<button onClick={() => handleSave()}>Сохранить</button>
		</>
	);
};

export default Post;
