import { TextFieldProps } from '@mui/material'

export type DefaultTextFieldProps = {
  label?: string
  inputProps: TextFieldProps
  value?: unknown
  change?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  keyDown?: React.KeyboardEventHandler<HTMLDivElement>
  endIconButton?: React.ReactNode
  focus?: boolean
}
