import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { DefaultCardProps } from './cards.types'

export const DefaultCard: FC<DefaultCardProps> = ({
  img = '',
  title = '',
  text = '',
  click = () => {},
}) => {
  return (
    <Card square sx={{ maxWidth: 300, margin: 'auto' }} onClick={click}>
      <CardActionArea>
        <CardMedia component="img" height="220" image={img} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" color="text.secondary" align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DefaultCard
