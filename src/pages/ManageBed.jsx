import { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addBed, deleteBed, getAllBed } from '../actions/bed';
import { getAllFloor } from '../actions/floor';
import { getAllWard } from '../actions/ward';

const ManageBed = () => {
    const dispatch = useDispatch();

    const { beds } = useSelector(state => state?.bedReducer);
    const { wards } = useSelector(state => state?.wardReducer);
    const { floors } = useSelector(state => state?.floorReducer);

    const [data, setData] = useState({
        hospital_id: "1",
        bed_no: "1",
    });

    useEffect(() => {
        dispatch(getAllBed());
        dispatch(getAllWard());
        dispatch(getAllFloor());
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {

        if (!data.floor || !data.ward_id || !data.bed_desc || !data.remote) {
            return toast.error("All fields are required.")
        }
        dispatch(addBed(data));
    }

    const handleDelete = (id, index) => {
        dispatch(deleteBed(id, index));
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
                                <Form.Select
                                    aria-label="Default select example"
                                    className='select-floor mb-4'
                                    name="floor"
                                    onChange={handleChange}
                                >
                                    <option>Select Floor</option>
                                    {floors && floors[0]?.total_floors && Array(parseInt(floors[0]?.total_floors)).fill(0).map((_, index) => (
                                        <option
                                            selected={data.floor === index + 1}
                                            value={index + 1}
                                        >
                                            {index + 1}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Select
                                    disabled={!data.floor}
                                    aria-label="Default select example"
                                    className='select-floor mb-4'
                                    name="ward_id"
                                    onChange={handleChange}
                                >
                                    <option>Select Ward</option>
                                    {wards && wards.length > 0 && wards.map((item, index) => (
                                        item.floor === data.floor &&
                                        <option
                                            selected={data.ward_id === item.id}
                                            value={item.id}
                                        >
                                            {item.ward_name}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Group className="mb-4" controlId="">
                                    <Form.Control
                                        disabled={!data.floor || !data.ward_id}
                                        type="text"
                                        placeholder="Bed Description"
                                        name="bed_desc"
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="">
                                    <Form.Control
                                        disabled={!data.floor || !data.ward_id}
                                        type="text"
                                        placeholder="Remote Serial"
                                        name="remote"
                                        onChange={handleChange}
                                        required={true}
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
                                            <td>{wards.find(w => w?.id === item?.ward_id)?.ward_name || "NA"}</td>
                                            <td>{item.remote}</td>
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

export default ManageBed;