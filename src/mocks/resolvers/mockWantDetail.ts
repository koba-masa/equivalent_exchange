import { type ResponseResolver, type MockedRequest, type restContext } from 'msw'
import data from '@/mocks/data/want_detail.json'

const MockWantDetail: ResponseResolver<MockedRequest, typeof restContext> = async (req, res, ctx) => {
  return await res(ctx.json(data))
}

export default MockWantDetail
