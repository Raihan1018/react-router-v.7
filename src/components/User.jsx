import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  console.log(user);
  return (
    <div className="border p-2 m-3 shadow-md rounded-lg">
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
