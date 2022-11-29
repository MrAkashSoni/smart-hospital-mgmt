import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Col, Form, Row } from 'react-bootstrap';
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck";
import { GiMedicines } from "@react-icons/all-files/gi/GiMedicines";
import { AiOutlineCoffee } from "@react-icons/all-files/ai/AiOutlineCoffee";
import { MdLightbulbOutline } from "@react-icons/all-files/md/MdLightbulbOutline";
import { RiShirtLine } from "@react-icons/all-files/ri/RiShirtLine";
import { FaToilet } from "@react-icons/all-files/fa/FaToilet";
import { IoMdMedical } from "@react-icons/all-files/io/IoMdMedical";
import chart1 from "../images/chart-1.png"
import userImage1 from "../images/user-image-1.jpg"
import { callTypes, getTimeDifference } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationHistory } from '../actions/notification';

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
        legend: {
          position: "bottom"
        }
      }
    }]
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const [notificationHistory, setNotificationHistory] = useState([]);
  const history = useSelector(state => state?.notificationReducer);

  useEffect(() => {
    dispatch(getNotificationHistory());
  }, [])

  useEffect(() => {
    setNotificationHistory(history.notificationHistory);
  }, [history.notificationHistory])

  return (
    <>
      <div className='dashboard-content-box'>
        <Row>
          <Col lg={8}>
            <Row>
              <Col lg={12}>
                <div className='chart-box mt-0'>
                  <div className='chart-box-header'>
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
                    <Chart type='donut' options={chartData.options} series={chartData.series} />
                  </div>
                </div>
              </Col>
              <Col lg={5} md={8}>
                <div className='chart-box'>
                  <div className='chart-box-body'>
                    <div className='cards-box'>
                      <div className='card-item'>
                        <IoMdMedical fill="white" size={50} />
                        <span className='card-number-item'>1</span>
                      </div>
                      <div className='card-item'>
                        <RiShirtLine fill="white" size={50} />
                      </div>
                      <div className='card-item'>
                        <AiOutlineCoffee fill="white" size={50} />
                      </div>
                      <div className='card-item'>
                        <FaToilet fill="white" size={50} />
                      </div>
                      <div className='card-item'>
                        <GiMedicines fill='white' size={50} />
                      </div>
                      <div className='card-item'>
                        <MdLightbulbOutline fill='white' size={50} />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6}>
            <div className='user-list'>
              <h3>Notification History</h3>

              {notificationHistory.length > 0 ? notificationHistory.map((item, index) => {
                return (
                  <div className='user-box' key={index}>
                    <div className='user-active-time'>
                      <span>{`${getTimeDifference(new Date(), new Date(item?.time))}m ago`}</span>
                    </div>
                    <div className='left-side'>
                      <div className='user-image'>
                        <img src={userImage1} alt="" />
                      </div>
                      <div>
                        <h6>{item.card_serial} <span className='badge badge-high'>{`{{priority}}`}</span> </h6>
                        <p>Request For{" "}
                          {/* {(callTypes.find(call => call.event === item.event)).icon} */}
                          {(callTypes.find(call => call.event === item.event)).label}</p>
                        <span>{`Serial No. ${item.serial}`}</span>
                        {/* <span>{`Bed No. ${item.serial} | Ward No. ${item.serial}`}</span> */}
                      </div>
                    </div>
                    {/* <div className='right-side mark-as-done'>
                      <a href="#"><AiOutlineCheck /></a>
                    </div> */}
                  </div>
                )
              }) : (
                <>
                  <p>No notification history found</p>
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
