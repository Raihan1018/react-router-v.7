import React from "react";
import { useLoaderData } from "react-router";

const UserDetail = () => {
  const user = useLoaderData();
  const { website, name } = user;
  return (
    <div className="border p-5 text-3xl">
      <h2>{name}</h2>
      <p>website: {website}</p>
    </div>
  );
};

export default UserDetail;
