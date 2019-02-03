import service from '../utils/service'

const baseUrl = '/api/v1/events'

const eventApi = {}

eventApi.listActiveLineEvents = () => {
  return service({
    url: `${baseUrl}/activeline`,
    method: 'get'
  })
}

eventApi.listDeadlineEvents = () => {
  return service({
    url: `${baseUrl}/deadline`,
    method: 'get'
  })
}

export default eventApi
