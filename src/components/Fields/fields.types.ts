export type DefaultTextFieldProps = {
  label?: string
  inputProps: any
  value?: unknown
  change?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  keyDown?: React.KeyboardEventHandler<HTMLDivElement>
  endIconButton?: React.ReactNode
}
