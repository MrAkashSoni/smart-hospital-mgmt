import { Button, Col, Form, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Meta from '../components/Meta'

import Logo1 from "../images/Logo1.svg"

const Signin = () => {
  // page content


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
                  <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button className="">Sign In</Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Signin