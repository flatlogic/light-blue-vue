import { describe, expect, it, vi } from 'vitest'
import { HttpClient } from '@/api/httpClient'

describe('API sessions', () => {
  it('sends the stored bearer token to the configured API only', async () => {
    vi.mocked(localStorage.getItem).mockReturnValue('test-session')
    const client = new HttpClient('https://api.example.test/api')
    const headers: unknown[] = []
    client.getInstance().defaults.adapter = async (config) => {
      headers.push(config.headers.Authorization)
      return { data: 'ok', status: 200, statusText: 'OK', headers: {}, config }
    }

    await client.get('/account')
    await client.get('https://other.example.test/public')
    expect(headers).toEqual(['Bearer test-session', undefined])
  })
})
