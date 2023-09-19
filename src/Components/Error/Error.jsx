import { Link, useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();

  return (
    <div>
      <h2 className="text-red-500 text-7xl font-bold text-center mt-20">Oops!!!</h2>
      <p>{error.statusText || error.massage}</p>

      {
        error.status === 404 && <div>
            <h3>Page Not Found</h3>
            <p>Go Back Home</p>
            <Link to="/"><button className="btn p-2 bg-green-600 text-red-600">Go Back</button></Link>
        </div>
      }
    </div>
  );
};

export default Error;
