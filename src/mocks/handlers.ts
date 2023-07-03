import { rest } from 'msw'
import Login from '@/mocks/resolvers/mockLogin.ts'
import MockWants from '@/mocks/resolvers/mockWants.ts'
import MockWantDetail from '@/mocks/resolvers/mockWantDetail'
import MockWantApply from '@/mocks/resolvers/mockWantsApplicate'

const handlers = [
  rest.post('*/v1/login', Login),
  rest.get('/v1/users/:userId/wants', MockWants),
  rest.get('/v1/users/:userId/wants/:wantId', MockWantDetail),
  rest.post('/v1/users/:userId/wants/:wantId', MockWantApply)
]

export default handlers
