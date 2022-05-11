import { forwardRef } from 'react'
import { TextField } from '@mui/material'

const DefaultTextField = forwardRef((props, ref) => {
  const { label, inputProps = {}, value, change, keyDown, endIconButton = null } = props

  return (
    <TextField
      inputRef={ref}
      id={label}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      value={value}
      {...inputProps}
      onChange={change}
      onKeyDown={keyDown}
      InputProps={{
        endAdornment: endIconButton,
      }}
    />
  )
})

export default DefaultTextField
