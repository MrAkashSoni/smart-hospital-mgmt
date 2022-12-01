import { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllFloor } from '../actions/floor';
import { addWard, deleteWard, editWard, getAllWard } from '../actions/ward';

const ManageWard = () => {
    const dispatch = useDispatch();

    const { wards } = useSelector(state => state?.wardReducer);
    const { floors } = useSelector(state => state?.floorReducer);

    const [data, setData] = useState({
        hospital_id: "1",
        ward_desc: "ward_desc",
    });
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        dispatch(getAllWard());
        dispatch(getAllFloor());
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {

        if (!data.floor || !data.ward_name || !data.led) {
            return toast.error("All fields are required.")
        }

        dispatch(editIndex ? editWard(editIndex, data) : addWard(data));
        setEditIndex(false);
    }

    const handleEdit = (index) => {
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
                                <Form.Select
                                    aria-label="Default select example"
                                    className='select-floor mb-4'
                                    name="floor"
                                    onChange={handleChange}
                                >
                                    <option>Select Floor</option>
                                    {floors && floors[0]?.total_floors && Array(parseInt(floors[0]?.total_floors)).fill(0).map((_, index) => (
                                        <option selected={data.floor === index + 1} value={index + 1}>{index + 1}</option>
                                    ))}
                                </Form.Select>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control
                                        disabled={!data.floor}
                                        type="text"
                                        placeholder="Ward Name"
                                        name="ward_name"
                                        value={data.ward_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control
                                        disabled={!data.floor}
                                        type="text"
                                        placeholder="LED Serial"
                                        name="led"
                                        value={data.led}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='create-box-footer'>
                            <Button className="btn-blue" onClick={handleSubmit}>
                                Create
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
                                        <th>Ward Desc</th>
                                        <th>Floor</th>
                                        <th>LED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wards && wards.length > 0 && wards.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.ward_name}</td>
                                            <td>{item.ward_desc}</td>
                                            <td>{item.floor}</td>
                                            <td>{item.led}</td>
                                            {/* <td style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleEdit(index)}>Edit</td> */}
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