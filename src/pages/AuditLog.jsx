import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

const AuditLog = () => {



    return (
        <div className="dashboard-content-box">
            <Row>
                <Col lg={12}>
                    <div className="table-box">
                        <div className="table-top">
                            <div className="table-left">
                                <h6 className="table-title">Audit Log</h6>
                            </div>
                            <div className="table-right">
                                <Form className="table-form">
                                    <Form.Group className="custom-select-date" controlId="formBasicEmail">
                                        <Form.Control type="date" placeholder="" />
                                        {/* <GoCalendar/> */}
                                    </Form.Group>
                                    
                                    <Button className='btn btn-blue search-btn ms-3' variant=''>
                                        Search
                                    </Button>
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

export default AuditLog;