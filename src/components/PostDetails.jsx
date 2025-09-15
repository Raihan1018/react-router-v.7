import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { title, body } = postDetails;
  return (
    <div>
      <h2>{title}</h2>
      <h2>{body}</h2>
    </div>
  );
};

export default PostDetails;
