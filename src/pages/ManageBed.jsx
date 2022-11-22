import { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addBed, getAllBed } from '../actions/bed';

const ManageBed = () => {
    const dispatch = useDispatch();
    const { loading, beds } = useSelector(state => state?.bedReducer);

    const [data, setData] = useState({
        floor: "1",
        ward_id: "2",
        hospital_id: "1",
        bed_no: "1",
        bed_desc: "ICU bed 2",
        remote: "True",
    });

    useEffect(() => {
        dispatch(getAllBed())
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        dispatch(addBed(data));
    }

    return (
        <div className='dashboard-content-box'>
            <Row>
                <Col lg={4}>
                    <div className='create-box'>
                        <div className='create-box-top'>
                            <h5>Create Bed</h5>
                        </div>
                        <div className='create-box-body'>
                            <div className='create-box-fields'>
                                <Form.Select aria-label="Default select example" className='select-floor mb-4' name="floor" onChange={handleChange}>
                                    <option>Select Floor</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Select aria-label="Default select example" className='select-floor mb-4' name="ward_id" onChange={handleChange}>
                                    <option>Select Ward</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Group className="mb-4" controlId="">
                                    <Form.Control type="text" placeholder="Bed Description" name="bed_desc" onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="">
                                    <Form.Control type="text" placeholder="Remote Serial" name="remote" onChange={handleChange} />
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
                                <h6 className="table-title">Bed Overview</h6>
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
                                <thead >
                                    <tr>
                                        <th>#</th>
                                        <th>Bed Description</th>
                                        <th>Floor</th>
                                        <th>Ward</th>
                                        <th>Remote</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {beds && beds.length > 0 && beds.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.bed_desc}</td>
                                            <td>{item.floor}</td>
                                            <td>{item.ward_id}</td>
                                            <td>{item.remote}</td>
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

export default ManageBed;