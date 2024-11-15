import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Header/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
