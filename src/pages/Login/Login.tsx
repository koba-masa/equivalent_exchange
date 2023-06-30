import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/pages/Login/Login.scss'

const Login: React.FunctionComponent = () => {
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const login = async (): Promise<void> => {
    const data = {
      login_id: loginId,
      password
    }
    const headers = {
      'Content-Type': 'application/json'
    }

    try {
      await axios.post('http://localhost:5173/v1/login', data, {
        headers
      })

      navigate('/')
    } catch (error) {
      setErrorMessage('ログインIDまたはパスワードが間違っています')
    }
  }

  return (
    <div className="login">
      <div className="id">
        <label htmlFor="login_id">ログインID</label>
        <input
          type="text"
          id="login_id"
          name="login_id"
          value={loginId}
          onChange={(e) => {
            setLoginId(e.target.value)
          }}
        />
      </div>
      <div className="password">
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className="button">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <button type="submit" onClick={login}>
          ログイン
        </button>
      </div>
      <div className="error_message">{errorMessage}</div>
    </div>
  )
}

export default Login
