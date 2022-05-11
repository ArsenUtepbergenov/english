import { useState } from 'react'

function useCounter() {
  const [count, setCount] = useState<number>(0)

  const add = (value: number) => {
    const newValue = count + value
    if (newValue <= 0) setCount(0)
    else setCount(newValue)
  }

  return {
    count,
    add,
  }
}

export default useCounter
