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
import userImage4 from "../images/user-image-4.png";

import { callTypes, getTimeDifference } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationHistory } from '../actions/notification';

const intialAllEvents = {
  "CODE_BLUE": {
    count: 0,
    label: "Code Blue",
    color: "#165DFF"
  },
  "NURSE_CALL": {
    count: 0,
    label: "Nurse",
    color: "#ce4097"
  },
  "FOOD_CALL": {
    count: 0,
    label: "Food",
    color: "#50CD89"
  },
  "WASHROOM": {
    count: 0,
    label: "Washroom",
    color: "#7239EA"
  },
  "MEDICINE": {
    count: 0,
    label: "Medicine",
    color: "#FFC700"
  },
  "LIGHT": {
    count: 0,
    label: "Light",
    color: "#fd7e14"
  },
}

const getChartData = (series = [], colors = [], labels = []) => {
  return {
    series,
    options: {
      chart: {
        type: "donut",
      },
      colors,
      labels,
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom"
          }
        }
      }]
    },
  }
}

const Home = () => {
  const dispatch = useDispatch();
  const [notificationHistory, setNotificationHistory] = useState([]);
  const [events, setEvents] = useState({});

  const [allEvents, setAllEvents] = useState(intialAllEvents)

  const [series, setSeries] = useState([])
  const [colors, setColors] = useState([])
  const [labels, setLabels] = useState([])

  const [chartData, setChartData] = useState(() => getChartData(series, colors, labels));

  const noti = useSelector(state => state?.notificationReducer);

  useEffect(() => {
    dispatch(getNotificationHistory());
  }, [])

  useEffect(() => {
    setNotificationHistory(noti.notificationHistory);
  }, [noti.notificationHistory])


  // ! when notificationHistory changes change chart data
  useEffect(() => {
    const initialAllEvents = allEvents;
    const newSeries = [];
    const newLabels = [];
    const newColors = [];

    // ! calculate 
    notificationHistory.forEach(noti => {
      initialAllEvents[noti.event]['count'] += 1;
    })

    Object.keys(initialAllEvents).forEach(key => {
      newSeries.push(initialAllEvents[key]["count"])
      newLabels.push(initialAllEvents[key]["label"])
      newColors.push(initialAllEvents[key]["color"])
    })

    setSeries(newSeries);
    setColors(newColors);
    setLabels(newLabels);

    console.log("newSeries", newSeries)
    console.log("newColors", newColors)
    console.log("newLabels", newLabels)
    setAllEvents(intialAllEvents);

  }, [notificationHistory])

  useEffect(() => {
    setChartData(getChartData(series, colors, labels))
  }, [series, colors, labels])

  useEffect(() => {
    setEvents(noti.eventCount);
  }, [noti.eventCount])

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
                    {/* <img src={chart1} alt="" className='img-fluid' /> */}
                    <Chart series={[{ name: 'Activity', data: series, }]}
                      type='bar'
                      options={{
                        colors: colors,
                        xaxis: { categories: labels }
                      }}
                    />
                  </div >
                </div >
              </Col >
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
                        <IoMdMedical fill="white" size={70} />
                        {events.CODE_BLUE > 0 && <span className='card-number-item'>{events.CODE_BLUE}</span>}
                      </div>
                      <div className='card-item'>
                        <RiShirtLine fill="white" size={70} />
                        {events.NURSE_CALL > 0 && <span className='card-number-item'>{events.NURSE_CALL}</span>}
                      </div>
                      <div className='card-item'>
                        <AiOutlineCoffee fill="white" size={70} />
                        {events.FOOD_CALL > 0 && <span className='card-number-item'>{events.FOOD_CALL}</span>}
                      </div>
                      <div className='card-item'>
                        <FaToilet fill="white" size={70} />
                        {events.WASHROOM > 0 && <span className='card-number-item'>{events.WASHROOM}</span>}
                      </div>
                      <div className='card-item'>
                        <GiMedicines fill='white' size={70} />
                        {events.MEDICINE > 0 && <span className='card-number-item'>{events.MEDICINE}</span>}
                      </div>
                      <div className='card-item'>
                        <MdLightbulbOutline fill='white' size={70} />
                        {events.LIGHT > 0 && <span className='card-number-item'>{events.LIGHT}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row >
          </Col >
          <Col lg={4} md={6}>
            <div className='user-list'>
              <h3>Notification History</h3>

              {notificationHistory.length > 0 ? notificationHistory.map((item, index) => {
                const currentEvent = callTypes.find(call => call.event === item.event);

                return (
                  !!item.attendent_by && <div className='user-box' key={index}>
                    <div className='user-active-time'>
                      <span>{`${getTimeDifference(new Date(), new Date(item?.time))}`}</span>
                    </div>
                    <div className='left-side'>
                      <div className='user-image'>
                        <img src={item.card_serial === "02A20071F61B42" ? userImage4 : userImage1} alt="" />
                      </div>
                      <div>
                        <h6>{item.attendent_by} <span className={`badge badge-${currentEvent.priority}`}>{currentEvent.priority.toUpperCase()}</span> </h6>
                        <p>Request For{" "}
                          {/* {currentEvent.icon} */}
                          {currentEvent.label}</p>
                        {/* <span>{`Serial No. ${item.serial}`}</span> */}
                        <span>{`Bed ${item.bed_desc} | Ward ${item.ward_name} | Floor ${item.floor}`}</span>
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
        </Row >
      </div >
    </>
  )
}

export default Home;
