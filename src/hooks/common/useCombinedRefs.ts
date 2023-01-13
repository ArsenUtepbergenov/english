import { Ref } from 'models/common'
import { useCallback } from 'react'

export default function useCombinedRefs(...refs: Ref[]) {
  const combinedRefs = useCallback(
    (element: Element) => {
      refs.forEach((ref: Ref) => {
        if (!ref) return
        if (typeof ref === 'function') ref(element)
        else ref.current = element
      })
    },
    [refs],
  )

  return combinedRefs
}
