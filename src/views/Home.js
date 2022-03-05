import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const count = useSelector(s => s.count)
  const d = useDispatch()


  const url = 'http://localhost:5000/'
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
          console.log('hi')
          d({type: 'UNAUTH'})
      })
  }, [])
  return (
    <div className='Home'>
        <h1>Home</h1>
        <p>hello world!: {count}</p>
        <button onClick={() => d({type: 'INCREMENT'})}>Increment</button>
    </div>
  )
}
