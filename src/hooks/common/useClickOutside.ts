import { RefObject, useEffect } from 'react'
import useLatest from './useLatest'

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: () => void,
  attached = true,
) {
  const latestHandler = useLatest(handler)

  useEffect(() => {
    if (!attached) return

    const handleClick = (e: MouseEvent) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) latestHandler.current()
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, latestHandler, attached])
}
