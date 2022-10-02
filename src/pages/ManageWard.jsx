import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import Header from '../components/Header'
import Meta from '../components/Meta'

const ManageWard = () => {
    // page content


    return (
        <div className='dashboard-content-box'>
            <Row>
                <Col lg={4}>
                    <div className='create-box'>
                        <div className='create-box-top'>
                            <h5>Create Ward</h5>
                        </div>
                        <div className='create-box-body'>
                            <div className='create-box-fields'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="number" placeholder="Floor No." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="text" placeholder="Floor Name" />
                                </Form.Group>
                                <Form.Select aria-label="Default select example" className='select-floor mb-4'>
                                    <option>Select Floor</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
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
                                <h6 className="table-title">Available Wards</h6>
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

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ManageWard;