export function useUser() {
  const counter = ref(0)
  const doubleCounter = computed(() => counter.value * 2)
  const increment = () => {
    counter.value++
  }
  return { counter, doubleCounter, increment }
}
