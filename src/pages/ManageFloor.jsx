import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import Header from '../components/Header'
import Meta from '../components/Meta'

const ManageFloor = () => {
  // page content


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
                  <Form.Control type="number" placeholder="Floor No." />
                </Form.Group>
                <Form.Group className="mb-4" controlId="">
                  <Form.Control type="text" placeholder="Floor Name" />
                </Form.Group>
              </div>
            </div>
            <div className='create-box-footer'>
              <Button className="btn-blue">Create</Button>
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
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Task Action</th>
                    <th>Patient Name</th>
                    <th>Date / Time</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="task-action-box">
                        <div></div>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
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