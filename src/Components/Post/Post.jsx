/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();

  const { title, body, id } = post;

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="bg-gray-400 border-2 mt-4 p-5 rounded-xl text-white">
      <h1>{id}</h1>
      <h4 className="text-xl text-red-950 font-bold">{title}</h4>
      <p>{body}</p>
      <button
        onClick={handleShowDetails}
        className="w-full bg-yellow-400 text-black rounded-xl text-2xl">
        Details</button>
    </div>
  );
};

export default Post;
