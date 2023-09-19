import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <h2>NavBar</h2> */}
      <nav className="text-3xl font-bold mt-5 mr-3">
        <div className=" ml-5 gap-4 flex justify-end">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
