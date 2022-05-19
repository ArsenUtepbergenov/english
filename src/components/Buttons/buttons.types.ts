import { ButtonProps } from '@mui/material'
import React from 'react'

export type DefaultButtonProps = {
  click: () => void
  buttonProps?: ButtonProps
  children: React.ReactNode
}
