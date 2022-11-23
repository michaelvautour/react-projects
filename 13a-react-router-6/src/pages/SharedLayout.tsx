import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

const Home = () => {
  return (
    <>
      <StyledNavbar />
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};
export default Home;
