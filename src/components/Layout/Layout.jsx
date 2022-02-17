import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer/Footer.jsx";
import Header from "../Home/Header/Header.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
