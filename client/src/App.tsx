import { useState} from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Haeder from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Statistika from './Components/Statistika/StatistikaList/Statistika';
import Game from "./Components/Game/Game";
import Reg from './Components/Reg/Reg';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { RootState } from './redux/types/state';
import { useSelector } from 'react-redux';
import AuthRoute from './Components/AuthRoute/AuthRoute';
import StatisticaAll from './Components/Statistika/statisticaAll/StatisticaAll';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {

  const user = useSelector((state: RootState) => state.UserReducer.user  );


  return (

    <>
    <Routes>
      <Route path='/' element={<Haeder /> } >

        <Route path='/' element={<Home/>}/>
        <Route element={<AuthRoute userId={user.id} redirectTo={'login'}/>}>
          <Route path='/statistika' element={<Statistika />}/>
          <Route path='/statistikaAll' element={<StatisticaAll />}/>
          <Route path="/game" element={<Game />} />
        </Route>
        <Route element={<ProtectedRoute userId={user.id} redirectTo={'/'}/>}>
          <Route path='/login' element={<Login />} />
          <Route path='/reg' element={<Reg />} />
        </Route>

      </Route>
    </Routes>
<Footer/>
    </>



  )
}

export default App;
