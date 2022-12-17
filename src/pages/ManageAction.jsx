import { Button, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import Header from '../components/Header'
import Meta from '../components/Meta'

import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus"

const ManageAction = () => {
    // page content


    return (
        <div className='dashboard-content-box'>
            <Row>
                <Col lg={4}>
                    <div className='create-box'>
                        <div className='create-box-top'>
                            <h5>Create Action</h5>
                        </div>
                        <div className='create-box-body'>
                            <div className='create-box-fields'>
                                <div className='create-action-icon'>
                                    <div className='select-icon'>
                                        <Form.Group controlId="formFile" className="create-action-icon">
                                            <Form.Control type="file" />
                                        </Form.Group>
                                        <AiOutlinePlus />
                                    </div>
                                    <span>Select icon</span>
                                </div>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="number" placeholder="Action Name" />
                                </Form.Group>
                                <Dropdown className='mb-4 color-action'>
                                    <Dropdown.Toggle variant="">
                                        Select Color for Action
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1"><span className='color-block'></span> Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1"><span className='color-block'></span> Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1"><span className='color-block'></span> Action</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className='create-box-footer'>
                            <Button className="btn-blue" >Create</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="table-box">
                        <div className="table-top">
                            <div className="table-left">
                                <h6 className="table-title">Action Overview</h6>
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

export default ManageAction;