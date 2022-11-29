import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addFloor, deleteFloor, getAllFloor } from '../actions/floor';

const ManageFloor = () => {
  const dispatch = useDispatch();

  const { loading, floors } = useSelector(state => state?.floorReducer);

  const [data, setData] = useState({
    total_floors: "0",
    hospital_id: "1"
  });

  useEffect(() => {
    dispatch(getAllFloor())
  }, [])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    dispatch(addFloor(data));
  }

  const handleDelete = (id, index) => {
    dispatch(deleteFloor(id, index));
  }

  return (
    <div className='dashboard-content-box'>
      <Row>
        <Col lg={4}>
          <div className='create-box'>
            <div className='create-box-top'>
              <h5>Create Floors</h5>
            </div>
            <div className='create-box-body'>
              <div className='create-box-fields'>
                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="number" placeholder="Total Floors" name='total_floors' value={data.total_floors} onChange={handleChange} />
                </Form.Group>
              </div>
            </div>
            <div className='create-box-footer'>
              <Button className="btn-blue" onClick={handleSubmit} disabled={loading}>
                {loading && <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />}
                {"  "}Create
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <div className="table-box">
            <div className="table-top">
              <div className="table-left">
                <h6 className="table-title">Available Floors</h6>
              </div>
              <div className="table-right">
                <Form className="table-form">
                  <Form.Group controlId="" className='searchbar-box'>
                    <Form.Control type="search" placeholder="Search" />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="dashboard-table">
              <Table striped bordered hover>
                < thead >
                  <tr>
                    <th>#</th>
                    <th>Total Floors</th>
                  </tr>
                </thead>
                <tbody>
                  {floors && floors.length > 0 && floors.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.total_floors}</td>
                      <td style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(item.id, index)}>Delete</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ManageFloor;