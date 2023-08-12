import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import StatistikaOne from '../StatistikaOne/StatistikaOne';
import "./Statistica.css"
import { RootState } from '../../../redux/types/state';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Statistika() {

    const user = useSelector((state: RootState) => state.UserReducer.user  );
    const [statistica, setstatistica] = useState([])

    

    const listStatistic =async()=>{
        try {
            const response = await fetch("http://localhost:3000/statistica",
            {
              credentials: "include"
            })
            const result= await response.json()
            setstatistica(result)
        } catch (error) {
            console.error("error Statictka result", error
            );
        }
    }



    useEffect(()=>{
        listStatistic()

    },[])
    
  return (
    <>
    <div className='container_statistica'>

  
    <div className='name_user'>Статистика игры <span className='login'>{user.login}</span> </div>
    <div className='game text-center align-middle'><Link to="/game" className='link'><span className='text_game'>играть</span></Link>  </div>
    <div className='table_container'>
      <div className='stat_all'>
       <Link className='table-light button_stat1' to={'/statistika'}>Своя статистика</Link>
       <Link className='table-light button_stat2' to={'/statistikaAll'}>Общая статистика</Link>
      </div>
          <Table responsive="sm">
              <thead >
                  <tr className='table-light'>
                      <th className='date text-center align-middle'>Время</th>
                      <th className='dateAll text-center align-middle'>Общее время игры</th>
                      <th className='dateAll text-center align-middle'>Очки</th>

                  </tr>
              </thead>
              <tbody >
              {statistica.length  ?

              statistica.map((el)=>
                <StatistikaOne key={el.id} el={el}/>
              )
              :
              <tr>
              <td colSpan="3">Сыграйте что бы появилась статистика</td>
            </tr>
                }
                </tbody>
          </Table>
      </div>
      </div>
      </>
  )
}
