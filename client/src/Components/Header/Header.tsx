import React, { useEffect,  } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./Header.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/types/state';
import { USER } from '../../redux/type.redux';



 function Header() {

    const navigate = useNavigate()

 const dispatch = useDispatch()

  const user = useSelector((state: RootState) => state.UserReducer.user  );



  //! расскоментить когда будет готовы рег и лог
  useEffect(()=>{
    (async function () {
      try {
        const response = await fetch('http://localhost:3000/user',{
          credentials: "include"
        })
        const result = await response.json()
        dispatch({ type: USER, payload: result });
      } catch (error) {
        console.error("error Reg",error);
      }
    })()
   },[])

   const logoutHandler = async() =>{
    try {
      const response = await fetch ("http://localhost:3000/user/logout",{
        credentials: "include"
      })
      const result =await response.json()
      dispatch({ type: USER, payload: result, authUser: false});
      navigate("/")
    } catch (error) {
      console.log("error", error);
      
    }
  }

  return (
         <>
     <Navbar className="header bg-body-tertiary container_header">
      {/* <div className='container_header'> */}
        {user.login 

        ?
        <><Navbar.Text className='ms-5'>
              <img className='img_logo' src="images/logo/devil (1).png" alt="logo" />
              <Link to="/" ><img className='img_logo' src="images/logo/logo.jpeg" alt="logo" /></Link>
            </Navbar.Text><Navbar.Toggle /><Navbar.Collapse className="justify-content-end me-5">
                <Navbar.Text>
                  <Link to="/statistika" className='m-3'>Статистика</Link>
                  <Link to="/" className='m-3' onClick={logoutHandler}>Выйти</Link>
                  
                </Navbar.Text>
              </Navbar.Collapse></>
    :
    <><Navbar.Text>
              <img className='img_logo' src="images/logo/devil (1).png" alt="logo" />
              <Link to="/" ><img className='img_logo' src="images/logo/logo.jpeg" alt="logo" /></Link>
            </Navbar.Text><Navbar.Toggle /><Navbar.Collapse className="justify-content-end">
                <Navbar.Text className='me-5'>
                  <Link to="/login" className='m-3'>Войти</Link>
                  
                  <Link to="/reg" className='m-3'>Зарегестрироваться</Link>
                </Navbar.Text>
              </Navbar.Collapse></>
      }
      {/* </div> */}
    </Navbar>
    <Outlet/>
     </> 
  )
}
export default Header