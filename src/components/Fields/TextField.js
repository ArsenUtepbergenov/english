import { forwardRef } from 'react'

const TextField = forwardRef((props, ref) => {
  const { label, inputProps, value, change } = props

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-case text-gray-800">{label}</label>
      <input
        ref={ref}
        id={label}
        className="bg-gray-200 border-0 border-b-2 border-b-slate-400"
        autoComplete="on"
        {...inputProps}
        value={value}
        onChange={change}
      />
    </div>
  )
})

export default TextField