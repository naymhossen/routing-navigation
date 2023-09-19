import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  const Location = useLocation();
  console.log(Location);
  return (
    <div className="w-9/12 mx-auto">
      <Header></Header>
      <h1 className="text-3xl font-bold text-center">Home Components</h1>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Home;
