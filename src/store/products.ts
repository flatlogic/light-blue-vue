import { defineStore } from 'pinia'
import { ref } from 'vue'
import { httpClient } from '@/api'
import { useToast } from '@/composables/useToast'
import config from '@/config'
import router from '@/router'
import mock from '@/pages/Ecommerce/mock'
import type { Product } from '@/types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const images = ref<string[]>([])
  const isReceiving = ref(false)
  const isUpdating = ref(false)
  const isDeleting = ref(false)
  const idToDelete = ref<number | null>(null)
  const toast = useToast()

  async function getProductsRequest() {
    if (!config.isBackend) {
      products.value = mock
      return
    }

    isReceiving.value = true
    try {
      products.value = await httpClient.get<Product[]>('/products')
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      isReceiving.value = false
    }
  }

  async function loadProductRequest(id: number) {
    if (!config.isBackend) {
      const product = mock.find(p => p.id === id)
      if (product && !products.value.find(p => p.id === id)) {
        products.value = [...products.value, product]
      }
      return
    }

    isReceiving.value = true
    try {
      const product = await httpClient.get<Product>(`/products/${id}`)
      if (!products.value.find(p => p.id === id)) {
        products.value = [...products.value, product]
      }
    } catch (error) {
      console.error('Failed to load product:', error)
    } finally {
      isReceiving.value = false
    }
  }

  async function updateProductRequest(product: Product) {
    if (!config.isBackend) return

    isUpdating.value = true
    try {
      const updatedProduct = await httpClient.put<Product>(`/products/${product.id}`, product)
      updateProductInList(updatedProduct)
      toast.success('Product has been Updated!')
    } catch (error) {
      console.error('Failed to update product:', error)
      toast.error('Failed to update product')
    } finally {
      isUpdating.value = false
    }
  }

  async function createProductRequest(product: Omit<Product, 'id'>) {
    if (!config.isBackend) return

    isUpdating.value = true
    try {
      const newProduct = await httpClient.post<Product>('/products', product)
      products.value = [...products.value, newProduct]
      router.push('/app/ecommerce/management')
      toast.success('Product has been Created!')
    } catch (error) {
      console.error('Failed to create product:', error)
      toast.error('Failed to create product')
    } finally {
      isUpdating.value = false
    }
  }

  async function deleteProductRequest(id: number) {
    if (!config.isBackend) return

    isDeleting.value = true
    idToDelete.value = id
    try {
      await httpClient.delete(`/products/${id}`)
      products.value = products.value.filter(p => p.id !== id)
      if (router.currentRoute.value.path !== '/app/ecommerce/management') {
        router.push('/app/ecommerce/management')
      }
      toast.success('Product has been Deleted!')
    } catch (error) {
      console.error('Failed to delete product:', error)
      toast.error('Failed to delete product')
    } finally {
      isDeleting.value = false
      idToDelete.value = null
    }
  }

  async function getProductsImagesRequest(productId: number, currentImg?: string) {
    if (!config.isBackend) return

    try {
      const imagesList = await httpClient.get<string[]>('/products/images-list')
      images.value = imagesList
      if (!currentImg && imagesList.length) {
        updateProductInList({ id: productId, img: imagesList[0] })
      }
    } catch (error) {
      console.error('Failed to fetch images:', error)
    }
  }

  function updateProductInList(updatedProduct: Partial<Product> & { id: number }) {
    const index = products.value.findIndex(p => p.id === updatedProduct.id)
    if (index !== -1) {
      products.value = products.value.map((p, i) =>
        i === index ? { ...p, ...updatedProduct } : p
      )
    }
  }

  function $reset() {
    products.value = []
    images.value = []
    isReceiving.value = false
    isUpdating.value = false
    isDeleting.value = false
    idToDelete.value = null
  }

  return {
    products,
    images,
    isReceiving,
    isUpdating,
    isDeleting,
    idToDelete,
    getProductsRequest,
    loadProductRequest,
    updateProductRequest,
    createProductRequest,
    deleteProductRequest,
    getProductsImagesRequest,
    $reset,
  }
})
