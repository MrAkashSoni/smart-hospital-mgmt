// components
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [isSideBarOpen, setSideBar] = useState(false)
  const toggleSideBar = () => {
    setSideBar(!isSideBarOpen)
  }

  const { pathname } = useLocation()

  const token = localStorage.getItem("token")

  return (
    <>
      <div className="dashboard">
        <div>
          <Sidebar sidebarOpen={token ? isSideBarOpen : false} />
        </div>
        <div className="dashboard-contant">
          {pathname !== "/signin" && <Header sidebarToggle={toggleSideBar} />}
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
