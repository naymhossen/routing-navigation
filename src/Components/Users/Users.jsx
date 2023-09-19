import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const user = useLoaderData();

  return (
    <div className="text-xl font-bold w-9/12 mx-auto">
      <h3>This is the users section</h3>
      <h1>User: {user.length}</h1>
      <div className="grid grid-cols-3 gap-4">
      {
        user.map(user => <User key={user.id} user={user}></User>)
      }
      </div>
    </div>
  );
};

export default Users;
