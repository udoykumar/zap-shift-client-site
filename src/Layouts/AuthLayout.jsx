import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authimage.png";
const AuthLayout = () => {
  return (
    <div className="bg-primary/30  ">
      <div className="container mx-auto">
        <div className="bg-secondary px-5 py-2 w-full rounded-2xl sticky top-0 left-0">
          <Logo />
        </div>
        <div className="flex items-center max-w-6xl mx-auto h-screen gap-10">
          <div className="flex-1">
            <Outlet />
          </div>
          <div className="flex-1">
            <img className="w-full" src={authImage} alt="authimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
