import { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addWard, deleteWard, editWard, getAllWard } from '../actions/ward';

const initialData = {
    id: null,
    floor: "1",
    ward_name: "OPD",
    ward_desc: "Medium",
    led: "True",
    hospital_id: "1"
}

const ManageWard = () => {
    const dispatch = useDispatch();

    const { loading, wards } = useSelector(state => state?.wardReducer);

    const [data, setData] = useState(initialData);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        dispatch(getAllWard())
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        dispatch(editIndex ? editWard(editIndex, data) : addWard(data));
        setEditIndex(false);
    }

    const handleEdit = (index) => {
        console.log('wards', wards[index]);
        setEditIndex(index);
        setData(wards[index]);
    }

    const handleDelete = (id, index) => {
        dispatch(deleteWard(id, index));
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
                                    <Form.Control type="text" placeholder="Ward Name" name="ward_name" value={data.ward_name} onChange={handleChange} />
                                </Form.Group>
                                <Form.Select aria-label="Default select example" className='select-floor mb-4' name="floor" onChange={handleChange}>
                                    <option>Select Floor</option>
                                    <option selected={data.floor === "1"} value="1">One</option>
                                    <option selected={data.floor === "2"} value="2">Two</option>
                                    <option selected={data.floor === "3"} value="3">Three</option>
                                </Form.Select>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="text" placeholder="LED Serial" name="led" value={data.led} onChange={handleChange} />
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
                                            <td style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleEdit(index)}>Edit</td>
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

export default ManageWard;