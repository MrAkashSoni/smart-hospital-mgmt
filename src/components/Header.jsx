import { Button, Dropdown, Form } from 'react-bootstrap'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
import { VscBell } from "@react-icons/all-files/vsc/VscBell"
import { FiSettings } from "@react-icons/all-files/fi/FiSettings"
import { RiLogoutBoxLine } from "@react-icons/all-files/ri/RiLogoutBoxLine"
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"

import userImage from "../images/user-image.jpg"
import userImage1 from "../images/user-image-1.jpg"
import userImage4 from "../images/user-image-4.png";
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { callTypes } from '../common';
import { useDispatch } from 'react-redux';

const client = new W3CWebSocket(`${process.env.REACT_APP_SOCKET_BASE_URL || 'wss://nurster.com/ws/ws/'}socket-notification/`);

const Header = ({ sidebarToggle }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDarkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (response) => {
      const data = {
        "CODE_BLUE": 0,
        "NURSE_CALL": 0,
        "WASHROOM": 0,
        "MEDICINE": 0,
        "FOOD_CALL": 0,
        "LIGHT": 0,
      };
      const socketData = JSON.parse(response?.data)?.message;
      console.log("socketData --->", socketData);
      setNotifications(socketData);

      socketData.map((item) => {
        data[item.event] = data[item.event] + 1;
      });

      dispatch({ type: "SHOW_EVENT_COUNT", payload: data });
    };
  }, [client])

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
    localStorage.setItem("dark-mode", isDarkMode)
  }, [isDarkMode])

  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <Button variant='' className='sidebar-menu-btn' onClick={sidebarToggle}>
            <AiOutlineMenu />
          </Button>
          <Form className='header-search-form'>
            <div className='header-search-bar'>
              <Form.Group controlId="" className='searchbar-box'>
                <Form.Control type="search" placeholder="Search" />
              </Form.Group>
              <Button className='btn btn-blue search-btn' variant=''>
                <AiOutlineSearch />
              </Button>
            </div>
          </Form>
        </div>
        <div className='header-right'>
          <Form className='header-switch'>
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              checked={isDarkMode}
              onChange={() => setDarkMode(!isDarkMode)}
            />
          </Form>
          <Dropdown>
            <Dropdown.Toggle variant="success" className='notification-btn' id="dropdown-basic">
              <VscBell />
              {notifications?.length > 0 && <span className='notification-number'>{notifications?.length}</span>}
            </Dropdown.Toggle>

            <Dropdown.Menu className='notification-dropdown'>
              <div className='notification-popup'>
                <div className='notification-header'>
                  <Link to="/">Notifications</Link>
                </div>
                <div className='notification-popup-body'>
                  {notifications?.length > 0 ? notifications?.map((item, index) => {
                    return (
                      <>
                        <div className='user-box' key={index}>
                          <div className='left-side'>
                            <div className='user-image'>
                              <img src={item.card_serial === "02A20071F61B42" ? userImage4 : userImage1} alt="" />
                            </div>
                            <div>
                              <h6>{item.attendent_by}</h6>
                              <p>Request For {" "}
                                {(callTypes.find(call => call.event === item.event))?.label}
                              </p>
                              <span>{`Bed ${item.bed_desc} | Ward ${item.ward_name} | Floor ${item.floor}`}</span>
                            </div>
                          </div>
                          {/* <div className='right-side'>
                            <a href="#"><AiOutlineCheck /></a>
                          </div> */}
                        </div>
                      </>
                    )
                  }) : (
                    <span className='d-flex justify-content-center'>
                      No notification!
                    </span>
                  )}
                </div>
                {/* <div className='notification-popup-footer'>
                  <a href="#">View All</a>
                </div> */}
              </div>
            </Dropdown.Menu>
          </Dropdown>


          <Dropdown className='profile-dropdown'>
            <Dropdown.Toggle variant="" id="user-dropdown">
              <div className='image-box'>
                <img src={userImage} alt="" />
                <span className='profile-status'></span>
              </div>
              <div className='profile-name'>
                Jenny Wilson
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate('/setting')}><FiSettings /> Settings</Dropdown.Item>
              <Dropdown.Item onClick={() => {
                localStorage.clear();
                navigate("/signin")
              }}><RiLogoutBoxLine /> Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default Header;
