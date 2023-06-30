import { setupWorker } from 'msw'
import handlers from '@/mocks/handlers.ts'

const worker = setupWorker(...handlers)

export default worker
