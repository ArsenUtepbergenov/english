import { useState } from 'react'

function useCounter() {
  const [count, setCount] = useState<number>(0)

  const add = (value: number) => {
    setCount(newValue => value + Math.abs(newValue))
  }

  return {
    count,
    add,
  }
}

export default useCounter
