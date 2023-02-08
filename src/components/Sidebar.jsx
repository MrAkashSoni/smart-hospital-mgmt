import "../index.css"
import Logo from "../images/Logo.svg"
import { Nav } from "react-bootstrap";

import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight"
import { RiDashboardLine } from "@react-icons/all-files/ri/RiDashboardLine"
import { BsListTask } from "@react-icons/all-files/bs/BsListTask"
import { FaRegHospital } from "@react-icons/all-files/fa/FaRegHospital"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [activeId, setActiveId] = useState(1);

	const handleAuditlogClick = () => {

	}

	return (
		<>
			<div className={sidebarOpen ? "sidebar" : "sidebar sidebar-none"}>
				<Link to="/" className="logo-box">
					<img src={Logo} alt="" />
				</Link>
				<div className="sidebar-menu">
					<Nav className="sidebar-menu-list" >
						<ul>
							<li className={activeId == 1 ? "active-nav" : ""} onClick={() => setActiveId(1)}>
								<Nav.Item>
									<Nav.Link onClick={() => navigate("/")}>
										<div>
											<span className="left-icon"><RiDashboardLine /></span>
											<span className="nav-text">Dashboard</span>
										</div>
										<span className="right-icon"><BsChevronRight /></span>
									</Nav.Link>
								</Nav.Item>

							</li>
							<li className={activeId == 2 ? "active-nav" : ""} onClick={() => setActiveId(2)}>
								<Nav.Item>
									<Nav.Link>
										<div>
											<span className="left-icon"><FaRegHospital /></span>
											<span className="nav-text">Hospital</span>
										</div>
										<span className="right-icon"><BsChevronRight /></span>
									</Nav.Link>
								</Nav.Item>
								<ul className="sub-menu hospital-sub-menu">
									<li className={pathname === "/managefloor" ? "active-menu" : ""}>
										<Link to="/managefloor">
											Manage Floor
										</Link>
									</li>
									<li className={pathname === "/manageward" ? "active-menu" : ""}>
										<Link to="/manageward">
											Manage Ward
										</Link>
									</li>
									<li className={pathname === "/managebed" ? "active-menu" : ""}>
										<Link to="/managebed">
											Manage Bed
										</Link>
									</li>
									<li className={pathname === "/manageaction" ? "active-menu" : ""}>
										<Link to="/manageaction">
											Manage Action
										</Link>
									</li>
								</ul>
							</li>
							<li className={activeId == 3 ? "active-nav" : ""} onClick={() => setActiveId(3)}>
								<Nav.Item>
									<Nav.Link onClick={() => { navigate('/auditlog') }}>
										<div>
											<span className="left-icon"><BsListTask /></span>
											<span className="nav-text" onClick={handleAuditlogClick}>Audit Log</span>
										</div>
										<span className="right-icon"><BsChevronRight /></span>
									</Nav.Link>
								</Nav.Item>
							</li>
							{/* <li className={activeId == 4 ? "active-nav" : ""} onClick={() => setActiveId(4)}>
								<Nav.Item>
									<Nav.Link onClick={() => { navigate('/activityreport') }}>
										<div>
											<span className="left-icon"><BsListTask /></span>
											<span className="nav-text">Activity Report</span>
										</div>
										<span className="right-icon"><BsChevronRight /></span>
									</Nav.Link>
								</Nav.Item>
							</li> */}
						</ul>
					</Nav>

				</div>
			</div>
		</>
	);
};

export default Sidebar;
