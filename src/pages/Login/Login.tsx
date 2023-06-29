import '@/pages/Login/Login.scss'

const Login: React.FunctionComponent = () => {
  return (
    <div className="login">
      <div className="id">
        <label htmlFor="login_id">ログインID</label>
        <input type="text" id="login_id" name="login_id" />
      </div>
      <div className="password">
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="button">
        <button type="submit">ログイン</button>
      </div>
    </div>
  )
}

export default Login
