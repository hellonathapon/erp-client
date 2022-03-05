import React from 'react';
import './App.css';
import Home from './views/Home'
import Login from './views/Login'
import About from './views/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RouteGuard from './views/RouteGuard';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const url = 'http://localhost:5000/'
    const d = useDispatch()
    const isAuth = useSelector(s => s.isAuth)

  React.useEffect(() => {
      axios.get(url, {withCredentials: true})
      .then(res => {
          console.log('Get back from verify token in App.js')
          console.log(res);
          d({type: 'AUTH'})
      })
      .catch(err => {
          console.error(err)
          d({type: 'UNAUTH'})
      })
  }, [])

  return (
    <Router>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/about" element={<About />}/>
          <Route exact path='/' element={<RouteGuard a={isAuth}/>}>
            <Route path='' element={<Home/>}/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
