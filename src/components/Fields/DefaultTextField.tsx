import { forwardRef } from 'react'
import { TextField } from '@mui/material'
import { DefaultTextFieldProps } from './fields.types'

const DefaultTextField = forwardRef<HTMLInputElement, DefaultTextFieldProps>((props, ref) => {
  const { label = '', inputProps = {}, value, change, keyDown, endIconButton: endAdornment } = props

  return (
    <TextField
      inputRef={ref}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      value={value}
      {...inputProps}
      onChange={change}
      onKeyDown={keyDown}
      InputProps={{
        endAdornment,
      }}
    />
  )
})

export default DefaultTextField
