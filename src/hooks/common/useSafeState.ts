import { useCallback, useState } from 'react'
import useIsMounted from './useIsMounted'

export default function useSafeState<T>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue)
  const isMounted = useIsMounted()

  const updateState = useCallback(
    (newValue: T) => {
      if (isMounted.current) {
        setState(newValue)
      }
    },
    [isMounted],
  )

  return [state, updateState]
}
