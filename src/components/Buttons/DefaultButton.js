import Button from '@mui/material/Button'

function DefaultButton({ click = () => {}, buttonProps = {}, children }) {
  return (
    <Button size="small" variant="contained" {...buttonProps} onClick={click}>
      {children}
    </Button>
  )
}

export default DefaultButton
