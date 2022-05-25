import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: RouteComponent }) => {

    const isAuth = useSelector(state => state.userReducer.isAuth)

    if (isAuth === false) return <Navigate to='/' />

    return (
        <div><RouteComponent /></div>
    )
}

export default PrivateRoute