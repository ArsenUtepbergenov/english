import { useCallback } from 'react'

export default function useCombinedRefs(...refs: any[]) {
  const combinedRefs = useCallback(
    (element: any) => {
      refs.forEach((ref: any) => {
        if (!ref) return
        if (typeof ref === 'function') ref(element)
        else ref.current = element
      })
    },
    [refs],
  )

  return combinedRefs
}
