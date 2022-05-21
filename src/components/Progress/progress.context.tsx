import React, { createContext, useReducer } from 'react'
export const INCREASE = 'INCREASE'

type State = {
  value: number
}

const InitialState: State = {
  value: 0,
}

type Action = {
  type: string
  value?: number
}

type ContextProps = {
  value: number
  dispatch(params: Action): void
}

export const ProgressContext = createContext({} as ContextProps)

export const ProgressReducer = (state: State, action: Action) => {
  switch (action.type) {
    case INCREASE:
      let newValue = 0

      if (action?.value) {
        newValue = state.value >= 100 ? 0 : state.value + Math.abs(action.value)
      }
      return { value: newValue }
    default:
      return state
  }
}

export const ProgressContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ProgressReducer, InitialState)

  return (
    <ProgressContext.Provider value={{ value: state.value, dispatch }}>
      {children}
    </ProgressContext.Provider>
  )
}
