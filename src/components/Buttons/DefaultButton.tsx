import { FC } from 'react'
import Button from '@mui/material/Button'
import { DefaultButtonProps } from './buttons.types'

const DefaultButton: FC<DefaultButtonProps> = ({
  click = () => {},
  buttonProps = {},
  children,
}) => {
  return (
    <Button size="small" variant="contained" {...buttonProps} onClick={click}>
      {children}
    </Button>
  )
}

export default DefaultButton
