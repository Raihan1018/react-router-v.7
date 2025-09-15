import React from "react";
import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Users {users.length}</h2>
      {
        users.map((user) => <User key={user.id} user={user} />)
      }
    </div>
  );
};

export default Users;
