import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Message from '../../components/message'
import {
  Card,
  CardBody,
} from 'reactstrap'

const LoginView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [data, setData] = useState()
  const [success, setSuccess] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    await axios
      .post('/login', { email: email, password: password }, config)
      .then((data) => {
        localStorage.setItem('userInfo', JSON.stringify(data.data))
        setData(data.data)
        setSuccess(true)
      })
      .catch((error) => {
        setError('Invalid email or password')
        setSuccess(false)
      })
  }

  if (success) {
    return (
      <div>
        <Card className='card'>
          <CardBody>
            <h2 className='text-center'>Welcome User !</h2>
            <br />

            <div>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  } else {
    return (
      <div className='Login'>
        {error && <Message variant='danger'>{error}</Message>}
        <Form onSubmit={submitHandler}>
          <h3 className='text-center'>LOGIN</h3>
          <br />
          <Form.Group size='lg' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size='lg' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </Form.Group>

          <Button size='md' type='submit' className='button'>
            Login
          </Button>

        </Form>
      </div>
    )
  }
}

export default LoginView
