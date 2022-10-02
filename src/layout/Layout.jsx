// components
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isSideBarOpen,setSideBar]=useState(false)
  const toggleSideBar=()=>{
    setSideBar(!isSideBarOpen)
  }
  return (
    <>
      <div className="dashboard">
        <div>
          <Sidebar sidebarOpen={isSideBarOpen} />
        </div>
        <div className="dashboard-contant">
          <Header sidebarToggle={toggleSideBar}/>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
