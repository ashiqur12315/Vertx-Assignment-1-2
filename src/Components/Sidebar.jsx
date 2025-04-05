import { NavLink } from "react-router-dom";
import { links } from "../constants/Links";
import { MdDashboard } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { BsFlower2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-16 h-[calc(100vh-3.575rem)] hidden md:flex md:w-60 bg-black text-gray-500 p-4 gap-4 border-r border-gray-900">
        <div className="relative w-10 h-10">
          <img
            src="/public/vertx.PNG"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-700 border border-white rounded-full"></span>
        </div>

        <div className="flex flex-col space-y-6 text-[1rem] font-bold pl-4">
          <NavLinks />
        </div>
      </aside>

      <nav className=" fixed bottom-0 left-0 w-full bg-black text-gray-500 flex justify-around py-2 md:hidden border-t border-gray-700 z-50">
        <BottomNavLink to="/" label="Dashboard" icon={<MdDashboard />} />
        <BottomNavLink
          to={links.analytics}
          label="Analytics"
          icon={<FaChartBar />}
        />
        <BottomNavLink
          to={links.profile}
          label="Profile"
          icon={<BsFlower2 />}
        />
        <BottomNavLink
          to={links.connect}
          label="Connect"
          icon={<FaGlobeAmericas />}
        />
        <BottomNavLink
          to={links.dealroom}
          label="Dealroom"
          icon={<MdNotificationsNone />}
        />
      </nav>
    </>
  );
};

const NavLinks = () => (
  <>
    <NavLink
      to={links.dashboard}
      className={({ isActive }) => (isActive ? "text-white" : "")}
    >
      Dashboard
    </NavLink>
    <NavLink
      to={links.analytics}
      className={({ isActive }) => (isActive ? "text-white" : "")}
    >
      Analytics
    </NavLink>
    <NavLink
      to={links.profile}
      className={({ isActive }) => (isActive ? "text-white" : "")}
    >
      Profile
    </NavLink>
    <NavLink
      to={links.connect}
      className={({ isActive }) => (isActive ? "text-white" : "")}
    >
      Connect
    </NavLink>
    <NavLink
      to={links.dealroom}
      className={({ isActive }) => (isActive ? "text-white" : "")}
    >
      Dealroom
    </NavLink>
  </>
);

const BottomNavLink = ({ to, label, icon }) => (
  <div className="flex flex-col items-center">
    {icon}
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center text-xs ${
          isActive ? "text-white font-semibold" : "text-gray-500"
        }`
      }
    >
      {label}
    </NavLink>
  </div>
);

export default Sidebar;
