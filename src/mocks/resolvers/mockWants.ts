import { type ResponseResolver, type MockedRequest, type restContext } from 'msw'
import data from '@/mocks/data/wants.json'

const MockWants: ResponseResolver<MockedRequest, typeof restContext> = async (req, res, ctx) => {
  return await res(ctx.json(data))
}

export default MockWants
