import { Col, Container, Form, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Meta from '../components/Meta'

import chart1 from "../images/chart-1.png"
import chart2 from "../images/chart-2.png"
import cardBath from "../images/card-bath.svg"
import cardBell from "../images/card-bell.svg"
import cardWash from "../images/card-wash.svg"
import cardCloth from "../images/card-cloth.svg"

import userImage1 from "../images/user-image-1.jpg"
import userImage2 from "../images/user-image-2.png"
import userImage3 from "../images/user-image-3.png"
import userImage4 from "../images/user-image-4.png"
import userImage5 from "../images/user-image-5.png"
import bath from "../images/bath.svg"

import { GoCalendar } from "@react-icons/all-files/go/GoCalendar"
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"
import CustomToast from '../components/Toast'

const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <>
      <div className='dashboard-content-box'>
        <Row>
          <Col lg={8}>
            <Row>
              <Col lg={12}>
                <div className='chart-box mt-0'>
                  <div className='chart-box-header'>
                    <CustomToast />
                    <h3>Activity Chart</h3>
                    <div>
                      <Form>
                        <Form.Group className="custom-select-date" controlId="formBasicEmail">
                          <Form.Control type="date" placeholder="" />
                          {/* <GoCalendar/> */}
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                  <div className='chart-box-body'>
                    <img src={chart1} alt="" className='img-fluid' />
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className='chart-box'>
                  <div className='chart-box-header'>
                    <h3>Today’s Report</h3>

                  </div>
                  <div className='chart-box-body'>
                    <img src={chart2} alt="" className='img-fluid' />
                  </div>
                </div>
              </Col>
              <Col lg={5} md={8}>
                <div className='chart-box'>

                  <div className='chart-box-body'>
                    <div className='cards-box'>
                      <div className='card-item'>
                        <img src={cardBath} alt="" />
                        <span className='card-number-item'>1</span>
                      </div>
                      <div className='card-item'>
                        <img src={cardWash} alt="" />
                      </div>
                      <div className='card-item'>
                        <img src={cardBell} alt="" />
                      </div>
                      <div className='card-item'>
                        <img src={cardCloth} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6}>
            <div className='user-list'>
              <div className='user-box'>
                <div className='user-active-time'>
                  <span>2m Ago</span>
                </div>
                <div className='left-side'>
                  <div className='user-image'>
                    <img src={userImage1} alt="" />
                  </div>
                  <div>
                    <h6>Jenny Wilson <span className='badge badge-high'>High</span> </h6>
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
              <div className='user-box'>
                <div className='user-active-time'>
                  <span>2m Ago</span>
                </div>
                <div className='left-side'>
                  <div className='user-image'>
                    <img src={userImage2} alt="" />
                  </div>
                  <div>
                    <h6>Jenny Wilson <span className='badge badge-low'>Low</span> </h6>
                    <p>Request For
                      <img src={bath} alt="" />
                      Bath</p>
                    <span>Bed No. 3 | Ward No. 2</span>
                  </div>
                </div>
                <div className='right-side '>
                  <a href="#"><AiOutlineCheck /></a>
                </div>
              </div>
              <div className='user-box'>
                <div className='user-active-time'>
                  <span>2m Ago</span>
                </div>
                <div className='left-side'>
                  <div className='user-image'>
                    <img src={userImage3} alt="" />
                  </div>
                  <div>
                    <h6>Jenny Wilson <span className='badge badge-medium'>Medium</span> </h6>
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
                <div className='user-active-time'>
                  <span>2m Ago</span>
                </div>
                <div className='left-side'>
                  <div className='user-image'>
                    <img src={userImage5} alt="" />
                  </div>
                  <div>
                    <h6>Jenny Wilson <span className='badge badge-medium'>Medium</span> </h6>
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
                <div className='user-active-time'>
                  <span>2m Ago</span>
                </div>
                <div className='left-side'>
                  <div className='user-image'>
                    <img src={userImage4} alt="" />
                  </div>
                  <div>
                    <h6>Jenny Wilson <span className='badge badge-medium'>Medium</span></h6>
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
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home;
