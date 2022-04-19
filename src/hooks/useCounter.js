import { useState } from "react"

function useCounter() {
  const [count, setCount] = useState(0)

  const add = (value) => {
    const newValue = count + value
    if (newValue <= 0) setCount(0)
    else setCount(newValue)
  }

  return {
    count,
    add
  }
}

export default useCounter