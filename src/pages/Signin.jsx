import { useState } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSignIn } from '../actions/signin'

import Logo1 from "../images/Logo1.svg"

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => state?.signInReducer);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    const res = await dispatch(userSignIn(data));
    if (res) navigate("/");
  }

  return (
    <div className='entry-page'>
      <Row className="justify-content-center">
        <Col lg={4}>
          <div className='entry-box'>
            <div className='entry-logo'>
              <img src={Logo1} alt="" />
            </div>
            <div className='entry-box-text'>
              <h6>Sign In</h6>
            </div>
            <div className='entry-box-bottom'>
              <Form>
                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="text" placeholder="Enter Username" name='email' onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                </Form.Group>
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading && <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />}
                  Sign In
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Signin