import { useState, useCallback } from 'react'

interface UseCounterProps {
  count: number;
  increment: () => void;
}

export const useCounter = (): UseCounterProps => {
  const [count, setCount] = useState(0)
  
  const increment = useCallback(() => setCount((x) => x + 1), [])

  return { count, increment }
}
