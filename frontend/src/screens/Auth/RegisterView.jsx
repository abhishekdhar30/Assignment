import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Message from '../../components/message'

const RegisterView = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [successmessage, successMessage] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      successMessage(null)
      setMessage('Passwords do not match')
    } else {
      await axios
        .post('/signup', { name: name, email: email, password: password })
        .then((data) => {
          console.log(data)
           setMessage(null);
           successMessage(data.data)
        })
        .catch((error) => {
           successMessage(null);
          setMessage(error.response.data.message);
        })
    }
  }

  return (
    <div className='signup'>
      <h3 className='text-center'>Sign Up</h3>
      <br />
      {message && <Message variant='danger'>{message}</Message>}
      {successmessage && <Message variant='success'>{successmessage}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Row className='py-3'>
          <Col>
            Have an Account? <Link to='/login'>Login</Link>
          </Col>
        </Row>



        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
    </div>
  )
}

export default RegisterView
