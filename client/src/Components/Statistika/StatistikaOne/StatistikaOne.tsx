import React from 'react'
import "./StatistikaOne.css"

export default function StatistikaOne({el}) {
  
  return (
    <>
       
        <tr className='table'>
           <td className='table-light text-center align-middle' >{el.createdAt.toLocaleString().slice(0, 16).replace('T', ' ')}</td>
           <td className='table-light text-center align-middle'>{el.time} сек</td>
           <td className='table-light  text-center align-middle'>{el.points}</td>
        </tr>

    </>
  )
}
