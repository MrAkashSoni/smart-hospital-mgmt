import { Col, Form, Row } from 'react-bootstrap'
import chart1 from "../images/chart-1.png"
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
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"
import CustomToast from '../components/Toast'
import Chart from 'react-apexcharts'

import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useState } from 'react'
import { callTypes } from '../common'

const Home = () => {


  const [notifications, setNotifications] = useState([]);

  const client = new W3CWebSocket(`${process.env.REACT_APP_SOCKET_BASE_URL || 'ws://13.234.117.5:8000/ws/'}socket-notification/`);


  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };
  client.onmessage = (response) => {
    setNotifications([...notifications, JSON.parse(response?.data)?.message])
  };

  const chartData = {
    series: [10, 20, 30, 25, 10, 15],
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#165DFF", "#ce4097", "#50CD89", "#7239EA", "#FFC700", "#fd7e14"],
      labels: ["Code Blue", "Nurse", "Food", "Washroom", "Medicine", "Light"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 225,
          },
          legend: {
            position: "bottom"
          }
        }
      }]
    },
  };


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
                    <Chart type='donut' options={chartData.options} series={chartData.series} height={223} />
                  </div>
                </div>
              </Col>
              <Col lg={5} md={8}>
                <div className='chart-box'>
                  <div className='chart-box-body'>
                    <div className='cards-box'>
                      <div className='card-item'>
                        <img src={cardBell} alt="" />
                        <span className='card-number-item'>1</span>
                      </div>
                      <div className='card-item'>
                        <img src={cardCloth} alt="" />
                      </div>
                      <div className='card-item'>
                        <img src={cardBell} alt="" />
                      </div>
                      <div className='card-item'>
                        <img src={cardWash} alt="" />
                      </div>
                      <div className='card-item'>
                        <img src={cardBell} alt="" />
                      </div>
                      <div className='card-item'>
                        <img src={cardBath} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6}>
            <div className='user-list'>
              {notifications.length > 0 ? notifications.map((item, index) => {
                return (
                  <div className='user-box' key={index}>
                    <div className='user-active-time'>
                      <span>{`{{time}} ago`}</span>
                    </div>
                    <div className='left-side'>
                      <div className='user-image'>
                        <img src={userImage1} alt="" />
                      </div>
                      <div>
                        <h6>{`{{assigneeName}}`} <span className='badge badge-high'>{`{{priority}}`}</span> </h6>
                        <p>Request For
                          <img src={bath} alt="" />
                          {(callTypes.find(call => call.event === item.event)).label}</p>
                        <span>{`Bed No. ${item.bed_id} | Ward No. ${item.ward_id}`}</span>
                      </div>
                    </div>
                    <div className='right-side mark-as-done'>
                      <a href="#"><AiOutlineCheck /></a>
                    </div>
                  </div>
                )
              }) : (
                <>
                  <p>No notifications</p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home;
