import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  return (
    <div>
      <h2>Users data loading with Suspense: {users.length}</h2>
    </div>
  );
};

export default Users2;
