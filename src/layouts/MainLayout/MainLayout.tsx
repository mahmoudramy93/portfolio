import { Header } from "@components/common";
import { Navigation } from "@components/portfolio";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Navigation/>
    </>
  );
};

export default MainLayout;
