import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({user}) => {

    const {name,username, email, id} = user;

    return (
        <div className="bg-gray-400 border-2 mt-4 p-5 rounded-xl text-white">
            <h3>{name}</h3>
            <h4>{username}</h4>
            <p>{email}</p>
            <button className="btn bg-green-400 p-2 rounded-xl mt-3"><Link to={`/user/${id}`}>Show Details</Link></button>
        </div>
    );
};

export default User;