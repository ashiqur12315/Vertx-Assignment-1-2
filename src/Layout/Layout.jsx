import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";

export const Layout = () => {
  console.log("Dashboard component rendered");
  return (
    <div className="font-manrope">
      <Navbar />
      <div className="flex mb-10 md:mb-0">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
