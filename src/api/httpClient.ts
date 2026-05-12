import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import config from '@/config'

// API Response types
export interface ApiResponse<T = unknown> {
  data: T
  message?: string
  status: number
}

export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}

// HTTP Client class with interceptors
class HttpClient {
  private instance: AxiosInstance

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.setupInterceptors()
  }

  private setupInterceptors(): void {
    // Request interceptor - add auth token
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token')
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Response interceptor - handle errors
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Clear token and redirect to login
          localStorage.removeItem('token')
          window.location.href = '/login'
        }

        const apiError: ApiError = {
          message: error.response?.data?.message || error.message || 'An error occurred',
          status: error.response?.status || 500,
          errors: error.response?.data?.errors,
        }

        return Promise.reject(apiError)
      }
    )
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config)
    return response.data
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<T>(url, data, config)
    return response.data
  }

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.put<T>(url, data, config)
    return response.data
  }

  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.patch<T>(url, data, config)
    return response.data
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T>(url, config)
    return response.data
  }

  // Get the axios instance for advanced use cases
  getInstance(): AxiosInstance {
    return this.instance
  }
}

// Export singleton instance
export const httpClient = new HttpClient(config.baseURLApi)

// Export class for testing or custom instances
export { HttpClient }
