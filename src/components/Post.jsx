import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;
  console.log(post);
  return (
    <div className="border p-3 m-3 rounded-xl">
      <h2>{id}</h2>
      <p>{title}</p>
      <Link to={`/posts/${id}`}>Show more</Link>
    </div>
  );
};

export default Post;
