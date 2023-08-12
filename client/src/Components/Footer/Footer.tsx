import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css"

export default function Footer() {
  return (
    <>
       <Navbar className="footer">
        <Container className='cont'>
          <div>Создатели: Валентин Киршин, Роман Решетов, Артур Коноваленков</div>
          <div>@2023</div>
        </Container>
      </Navbar>
    </>
  )
}
