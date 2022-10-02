import "../index.css"
import Logo from "../images/Logo.svg"
import { Nav } from "react-bootstrap";

import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight"
import { RiDashboardLine } from "@react-icons/all-files/ri/RiDashboardLine"
import { BsListTask } from "@react-icons/all-files/bs/BsListTask"
import { FaRegHospital } from "@react-icons/all-files/fa/FaRegHospital"
import { useState } from "react";

const Sidebar = ({sidebarOpen}) => {
	const year = new Date().getFullYear();
	const [activeId, setActiveId] = useState(1);
	return (
		<>
			<div className={sidebarOpen?"sidebar":"sidebar sidebar-none"}>
				<div className="logo-box">
					<img src={Logo} alt="" />
				</div>
				<div className="sidebar-menu">
					<Nav className="sidebar-menu-list" >
						<ul>
							<li className={activeId==1?"active-nav":""} onClick={()=>setActiveId(1)}>
								<Nav.Item>
									<Nav.Link href="">
										<div>
											<span className="left-icon"><RiDashboardLine /></span>
											<span className="nav-text">Dashboard</span>
										</div>
										<span className="right-icon"><BsChevronRight /></span>
									</Nav.Link>
								</Nav.Item>

							</li>
							<li className={activeId==2?"active-nav":""} onClick={()=>setActiveId(2)}>
								<Nav.Item>
									<Nav.Link eventKey="">
										<div>
											<span className="left-icon"><FaRegHospital /></span>
											<span className="nav-text">Hospital</span>
										</div>
										<span className="right-icon"><BsChevronRight /></span>
									</Nav.Link>
								</Nav.Item>
								<ul className="sub-menu hospital-sub-menu">
									<li className="active-menu">
										<a href="#">Manage Floor</a>
									</li>
									<li>
										<a href="#">Manage Ward</a>
									</li>
									<li>
										<a href="">Manage Bed</a>
									</li>
									<li>
										<a href="#">Manage Action</a>
									</li>
								</ul>
							</li>
							<li className={activeId==3?"active-nav":""} onClick={()=>setActiveId(3)}>
								<Nav.Item>
									<Nav.Link eventKey="">
										<div>
											<span className="left-icon"><BsListTask /></span>
											<span className="nav-text">Audit Log</span>
										</div>
										<span className="right-icon"><BsChevronRight /></span>
									</Nav.Link>
								</Nav.Item>
							</li>
							<li className={activeId==4?"active-nav":""} onClick={()=>setActiveId(4)}>
								<Nav.Item>
									<Nav.Link eventKey="">
										<div>
											<span className="left-icon"><BsListTask /></span>
											<span className="nav-text">Activity Report</span>
										</div>
										<span className="right-icon"><BsChevronRight /></span>
									</Nav.Link>
								</Nav.Item>
							</li>
						</ul>
					</Nav>

				</div>
			</div>
		</>
	);
};

export default Sidebar;
