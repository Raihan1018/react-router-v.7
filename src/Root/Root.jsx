import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Root = () => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
