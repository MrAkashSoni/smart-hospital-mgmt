import { Badge, Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'

import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
import { VscBell } from "@react-icons/all-files/vsc/VscBell"
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown"
import { FiSettings } from "@react-icons/all-files/fi/FiSettings"
import { RiLogoutBoxLine } from "@react-icons/all-files/ri/RiLogoutBoxLine"
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"

import userImage from "../images/user-image.jpg"
import userImage1 from "../images/user-image-1.jpg"
import bath from "../images/bath.svg"
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ head, description, sidebarToggle }) => {

  const navigate = useNavigate();
  const [isDarkMode, setDarkMode] = useState(false)

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
            <Dropdown.Toggle variant="success" className='notification-btn' id="dropdown-basic" disabled={true}>
              <VscBell />
              {/* <span className='notification-number'>3</span> */}
            </Dropdown.Toggle>

            <Dropdown.Menu className='notification-dropdown'>
              <div className='notification-popup'>
                <div className='notification-header'>
                  <Link to="/">Notifications</Link>
                  <Link to="/">Mark all as read</Link>
                </div>
                <div className='notification-popup-body'>
                  <div className='user-box'>
                    <div className='left-side'>
                      <div className='user-image'>
                        <img src={userImage1} alt="" />
                      </div>
                      <div>
                        <h6>Jenny Wilson</h6>
                        <p>Request For
                          <img src={bath} alt="" />
                          Bath</p>
                        <span>Bed No. 3 | Ward No. 2</span>
                      </div>
                    </div>
                    <div className='right-side'>
                      <a href="#"><AiOutlineCheck /></a>
                    </div>
                  </div>
                  <div className='user-box'>
                    <div className='left-side'>
                      <div className='user-image'>
                        <img src={userImage1} alt="" />
                      </div>
                      <div>
                        <h6>Jenny Wilson</h6>
                        <p>Request For
                          <img src={bath} alt="" />
                          Bath</p>
                        <span>Bed No. 3 | Ward No. 2</span>
                      </div>
                    </div>
                    <div className='right-side mark-as-done'>
                      <a href="#"><AiOutlineCheck /></a>
                    </div>
                  </div>
                </div>
                <div className='notification-popup-footer'>
                  <a href="#">View All</a>
                </div>
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
