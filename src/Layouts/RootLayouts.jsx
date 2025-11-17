import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Share/Footer/Footer";
import Navbar from "../pages/Share/Navbar/Navbar";

const RootLayouts = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayouts;
