import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home/Home";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
