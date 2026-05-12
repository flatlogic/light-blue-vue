import { ref, watch, type Ref, type MaybeRefOrGetter, toValue } from 'vue'

export function useDebounce<T>(value: MaybeRefOrGetter<T>, delay = 300): Ref<T> {
  const debouncedValue = ref<T>(toValue(value)) as Ref<T>
  let timeout: ReturnType<typeof setTimeout>

  watch(
    () => toValue(value),
    (newValue) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        debouncedValue.value = newValue
      }, delay)
    }
  )

  return debouncedValue
}

export function useDebounceFn<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay = 300
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}
