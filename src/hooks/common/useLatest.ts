import { useLayoutEffect, useRef } from 'react'

export default function useLatest<T>(value: T) {
  const valueRef = useRef(value)

  useLayoutEffect(() => {
    valueRef.current = value
  }, [value])

  return valueRef
}
