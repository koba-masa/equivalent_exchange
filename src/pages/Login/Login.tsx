import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, logined } from '@/components/Authentication'
import { post } from '@/apis/base'
import { type ResponseData } from '@/models/ResponseData'
import '@/pages/Login/Login.scss'

const Login: React.FunctionComponent = () => {
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (logined()) {
      navigate('/')
    }
  }, [])

  const handleLogin = async (): Promise<void> => {
    const params = {
      login_id: loginId,
      password
    }
    const responseData: ResponseData = await post('/v1/login', params)
    if (responseData.status === 200) {
      // TODO: 本来はサーバーからトークンを取得する
      login('sample')
      navigate('/')
    } else {
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
        <button type="submit" onClick={handleLogin}>
          ログイン
        </button>
      </div>
      <div className="error_message">{errorMessage}</div>
    </div>
  )
}

export default Login
