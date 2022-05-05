import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export function DefaultCard({ img, title, text = '', click = () => {} }) {
  return (
    <Card sx={{ maxWidth: 300, margin: 'auto' }} onClick={click}>
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
