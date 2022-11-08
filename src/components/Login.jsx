import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [userLogged, setUserLogged] = useState(() => JSON.parse(window.localStorage.getItem('user')))
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState(false)
  let navigate = useNavigate()

  useEffect(()=>{
    if(userLogged !== null){
      navigate('/admin')
    }
  },[])
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if([username, password].includes('')){
      setAlert(true)
      return
    }

    try {
      fetch('https://andres-back-production.up.railway.app/api/users/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(res => {
          if (!res.ok) throw new Error('Response is NOT ok')
          return res.json()
        })
        .then(res => {
          localStorage.setItem('user', JSON.stringify(res.name))
          navigate('/admin')
        }).catch(err => {
          console.error(err)
        })
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="container-login">
      <div>
        <h1>Welcome to panel administration</h1>
        <div className="container-form-login">
          <p>Log in to manage your dates</p>
          <form 
            onSubmit={handleSubmit}
            className='form-login'>
            <div>
              <label htmlFor="username">Username</label>
              <input
                className='input-form-login'
                type="text"
                placeholder='Username'
                id="username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input 
                className='input-form-login'
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            {
              alert 
                ? <div className='error-auth'>
                  <p>Invalid Credentials</p>
                </div>
                : ''
            }
            
            <input 
              type="submit"
              value="Login"
              className="submit-login"
            />

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login