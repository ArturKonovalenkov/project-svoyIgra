import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { USER } from '../../redux/type.redux';
import Container from 'react-bootstrap/Container';

interface ILog {
  email: string,
  password: string
}

const initState: ILog = {
  email: '',
  password: ''
}

export default function Login() {
  const [login, setLogin] = useState(initState)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((pre) => ({...pre, [e.target.name] : e.target.value}))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(login)
      })
      const res = await response.json()
      // console.log("res:", res)
      dispatch({ type: USER, payload: res });
      navigate('/')
    } catch (error) {
      console.log('Ошибка регистрации', error)
    }
  }

  return (
    <Container id='login-container' className='d-flex justify-content-center mt-5'>
    <Form className='d-flex flex-column bg-primary-subtle p-2 border border-primary-subtle mt-5' onSubmit={submitHandler}>
      <Form.Group className='mt-5' controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control onChange={inputHandler} value={login.email} name='email' type='email' placeholder='Введите email'/>
      </Form.Group>
      <Form.Group className='mt-5' controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={inputHandler} value={login.password} name='password' type='password' placeholder='Введите пароль'/>
      </Form.Group>
      <Button className='m-3' variant="primary" type="submit">
      Авторизоваться
      </Button>
    </Form>
    </Container>
  )
}

