import React from "react";
import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      {
        posts.map((post) => <Post key={post.id} post={post} />)
      }
    </div>
  );
};

export default Posts;
