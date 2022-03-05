import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

export default function RouteGuard(a) {
    // const url = 'http://localhost:5000/'
    // const d = useDispatch()
    // const isAuth = useSelector(s => s.isAuth)

    // React.useEffect(() => {
    //     axios.get(url, {withCredentials: true})
    //     .then(res => {
    //         console.log('Get back from verify token in RouteGuard')
    //         console.log(res);
    //         d({type: 'AUTH'})
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
    // }, [])
    console.log('g' ,a.a)

    return a.a ? <Outlet /> : <Navigate to="/login" />;
}
