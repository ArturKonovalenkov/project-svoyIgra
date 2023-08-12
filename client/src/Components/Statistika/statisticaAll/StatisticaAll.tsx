import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StatistikaFull from '../StatistikaFull/StatistikaFull'
import "./StatistikaAll.css"


export default function StatisticaAll() {

    const [statisticaAll, setStatisticaAll] = useState([])
    const [user, setUser] = useState([])
  
    const listStatisticAll =async()=>{
        try {
            const response = await fetch("http://localhost:3000/statisticfull",
            {
              credentials: "include"
            })
            const result= await response.json()
            setStatisticaAll(result)
        } catch (error) {
            console.error("error Statictka result", error
            );
        }
    }
    const UserAll =async()=>{
        try {
            const response = await fetch("http://localhost:3000/statisticfull/user",
            {
              credentials: "include"
            })
            console.log("🚀 ~ file: StatisticaAll.tsx:26 ~ listStatisticAll ~ responseUser:", response)
            const result= await response.json()
            console.log("🚀 ~ file: StatisticaAll.tsx:14 ~ listStatisticAll ~ resultUser:", result)
            setUser(result)
        } catch (error) {
            console.error("error Statictka result", error
            );
        }
    }

    useEffect(()=>{
        listStatisticAll()
        UserAll()

    },[])

    return (
        <>
    <div className='container_statistica'>

  
    <div className='name_user'>Статистика игры всех <span className='login'>Игроков</span></div>
    <div className='game text-center align-middle'><Link to="/game" className='link'><span className='text_game'>играть</span></Link>  </div>
    <div className='table_container'>
      <div className='stat_all'>
       <Link className='button_static1' to={'/statistika'}>Своя статистика</Link>
       <Link className='button_static2' to={'/statistikaAll'}>Общая статистика</Link>
      </div>
          <Table responsive="sm">
              <thead >
                  <tr className='table-light'>
                  <th className='dateAll text-center align-middle'>Игрок</th>
                      <th className='date text-center align-middle'>Время</th>
                      <th className='dateAll text-center align-middle'>Общее время игры</th>
                      <th className='dateAll text-center align-middle'>Очки</th>

                  </tr>
              </thead>
              <tbody >
              {statisticaAll.length  ?

                statisticaAll.map((el)=>
                <StatistikaFull key={el.id} el={el} user={user} />
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

