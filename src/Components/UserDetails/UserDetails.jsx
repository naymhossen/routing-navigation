import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const userDetails = useLoaderData();
    const {name, website} = userDetails;

    return (
        <div>
            <h4>User Details: {name}</h4>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;