import { forwardRef } from 'react'

const TextField = forwardRef((props, ref) => {
  const { label, inputProps, value, onChange } = props

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 text-case text-gray-800">{label}</label>
      <input
        ref={ref}
        id={label}
        className="bg-gray-200 py-2 px-3 border-2 border-b-slate-400 outline-none"
        autoComplete="on"
        {...inputProps}
        value={value}
        onChange={onChange}
      />
    </div>
  )
})

export default TextField