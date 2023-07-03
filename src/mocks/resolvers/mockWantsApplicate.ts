import { type ResponseResolver, type MockedRequest, type restContext } from 'msw'

const MockWantApply: ResponseResolver<MockedRequest, typeof restContext> = async (req, res, ctx) => {
  const requestBody = await req.json()
  const status = requestBody.stockId === '1' ? 200 : 404
  return await res(ctx.status(status))
}

export default MockWantApply
