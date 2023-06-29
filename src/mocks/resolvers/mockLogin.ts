import { type ResponseResolver, type MockedRequest, type restContext } from 'msw'

const Login: ResponseResolver<MockedRequest, typeof restContext> = async (req, res, ctx) => {
  const requestBody = await req.json()
  const status = requestBody.login_id === 'test' ? 200 : 401

  return await res(ctx.status(status))
}

export default Login
