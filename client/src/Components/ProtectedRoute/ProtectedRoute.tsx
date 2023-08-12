import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

interface IPropsRoute {
  userId: number,
  redirectTo: string
}

export default function ProtectedRoute({ userId, redirectTo }: IPropsRoute) {
  console.log('authUser', userId)
  if(userId !== 0) {
    return <Navigate to={redirectTo} replace/>
  } 
  return <Outlet />
}