import { http, HttpResponse } from 'msw'

// API base URL
const API_URL = 'http://localhost:8080/api'

// Mock user data
const mockUser = {
  id: '1',
  email: 'admin@flatlogic.com',
  name: 'Admin User',
}

// Mock products data
const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    subtitle: 'Subtitle 1',
    price: 99.99,
    description: 'Description 1',
    img: '/product1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    subtitle: 'Subtitle 2',
    price: 149.99,
    description: 'Description 2',
    img: '/product2.jpg',
  },
]

// Mock dashboard data
const mockDashboardData = {
  visits: { total: 1000, today: 50 },
  performance: { sdk: {}, integration: {} },
  server: { 1: {}, 2: {} },
  revenue: [],
  mainChart: [],
}

export const handlers = [
  // Auth endpoints
  http.post(`${API_URL}/auth/signin/local`, async ({ request }) => {
    const body = await request.json() as { email: string; password: string }

    if (body.email === 'admin@flatlogic.com' && body.password === 'password') {
      return HttpResponse.json('mock-jwt-token')
    }

    return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }),

  http.post(`${API_URL}/auth/signup`, async () => {
    return HttpResponse.json({ success: true })
  }),

  http.get(`${API_URL}/auth/me`, () => {
    return HttpResponse.json(mockUser)
  }),

  // Products endpoints
  http.get(`${API_URL}/products`, () => {
    return HttpResponse.json(mockProducts)
  }),

  http.get(`${API_URL}/products/:id`, ({ params }) => {
    const product = mockProducts.find((p) => p.id === Number(params.id))
    if (product) {
      return HttpResponse.json(product)
    }
    return HttpResponse.json({ message: 'Not found' }, { status: 404 })
  }),

  http.post(`${API_URL}/products`, async ({ request }) => {
    const body = await request.json() as Record<string, unknown>
    return HttpResponse.json({ id: Date.now(), ...body })
  }),

  http.put(`${API_URL}/products/:id`, async ({ params, request }) => {
    const body = await request.json() as Record<string, unknown>
    return HttpResponse.json({ id: Number(params.id), ...body })
  }),

  http.delete(`${API_URL}/products/:id`, () => {
    return HttpResponse.json({ success: true })
  }),

  // Analytics endpoint
  http.get(`${API_URL}/analytics`, () => {
    return HttpResponse.json(mockDashboardData)
  }),
]
