import React from 'react'

export default function StatistikaFull({el, user}) {
    const userLogin = user.find((val) => val.id === el.user_id)?.login;
  return (
    <>    
    <tr className='table'>
    <td className='table-light  text-center align-middle'>{userLogin}</td>
       <td className='table-light text-center align-middle' >{el.createdAt.toLocaleString().slice(0, 16).replace('T', ' ')}</td>
       <td className='table-light text-center align-middle'>{el.time} сек</td>
       <td className='table-light  text-center align-middle'>{el.points}</td>
    </tr>
</>
  )
}
