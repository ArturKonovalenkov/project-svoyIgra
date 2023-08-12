import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { USER } from '../../redux/type.redux';
import { Container } from 'react-bootstrap';

interface IReg {
  login: string,
  email: string,
  password: string
}

const initState: IReg = {
  login: '',
  email: '',
  password: ''
}

export default function Reg() {
  const [reg, setReg] = useState(initState)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReg((pre) => ({...pre, [e.target.name] : e.target.value}))
  }

  const submitHandler = async (e) => {
    console.log('reg', reg);
    
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/user/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reg)
      })
      const res = await response.json()
      console.log("res:", res)
      dispatch({ type: USER, payload: res });
      navigate('/')
    } catch (error) {
      console.log('Ошибка регистрации', error)
    }
  }

  return (
    <Container className='d-flex justify-content-center mt-5 '>
    <Form className='d-flex flex-column bg-primary-subtle p-2 border border-primary-subtle mt-5' onSubmit={submitHandler}>
      <Form.Group className='mt-5' controlId="formBasicLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control onChange={inputHandler} value={reg.login} name='login' type='text' placeholder='Введите login'/>
      </Form.Group>
      <Form.Group className='mt-5' controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={inputHandler} value={reg.email} name='email' type='email' placeholder='Введите email'/>
      </Form.Group>
      <Form.Group className='mt-5' controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={inputHandler} value={reg.password} name='password' type='password' placeholder='Введите пароль'/>
      </Form.Group>
      <Button className='m-3' variant="primary" type="submit">
      Зарегистрироваться
      </Button>
    </Form>
    </Container>
  )
}
