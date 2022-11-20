import { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addWard, getAllWard } from '../actions/ward';

const ManageWard = () => {
    const dispatch = useDispatch();

    const { loading, wards } = useSelector(state => state?.wardReducer);

    const [data, setData] = useState({
        floor: "1",
        ward_name: "OPD",
        ward_desc: "Medium",
        led: "True",
        hospital_id: "1"
    });

    useEffect(() => {
        dispatch(getAllWard())
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        dispatch(addWard(data));
    }

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
                                    <Form.Control type="text" placeholder="Ward Name" name="ward_name" onChange={handleChange} />
                                </Form.Group>
                                <Form.Select aria-label="Default select example" className='select-floor mb-4' name="floor" onChange={handleChange}>
                                    <option>Select Floor</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="text" placeholder="LED Serial" name="led" onChange={handleChange} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='create-box-footer'>
                            <Button className="btn-blue" onClick={handleSubmit} disabled={loading}>Create</Button>
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
                            <Table striped bordered hover>
                                < thead >
                                    <tr>
                                        <th>#</th>
                                        <th>Ward Name</th>
                                        <th>Floor</th>
                                        <th>LED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wards && wards.length > 0 && wards.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.ward_name}</td>
                                            <td>{item.floor}</td>
                                            <td>{item.led}</td>
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

export default ManageWard;