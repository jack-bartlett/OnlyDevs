import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Odie from '../OdieLogo2.0.png'

export default function Registration() {
  return (
    <>
      <body >
        <div className='d-flex justify-content-center mx-4 bg-dark'>
          <div className='loginform my-5 row p-4 align-items-center justify-content-center'>
            <img className='odieIMG' src={Odie} alt="OdieTheDev" />
            <Form className='formaspects px-2 mx-2'>
              <Form.Group className="mb-2" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className='libtn ' variant="primary" type="submit">
                Create Account
              </Button>
            </Form>
          </div>
        </div>
      </body>
    </>
  )
}


