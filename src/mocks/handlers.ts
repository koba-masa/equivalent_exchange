import { rest } from 'msw'
import Login from '@/mocks/resolvers/mockLogin.ts'

const handlers = [rest.post('*/v1/login', Login)]

export default handlers
