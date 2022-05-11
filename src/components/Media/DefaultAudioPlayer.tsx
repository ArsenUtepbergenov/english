import { FC } from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { DefaultAudioPlayerProps } from './media.types'

const audio = new Audio()

const DefaultAudioPlayer: FC<DefaultAudioPlayerProps> = ({ word, phonetics, audioUrl }) => {
  const play = () => {
    audio.src = audioUrl
    audio.play()
  }

  return (
    <Box>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6">{word}</Typography>
          <Typography variant="body2">{phonetics}</Typography>
        </Grid>
        <Grid item>
          {audioUrl ? (
            <IconButton aria-label="play" onClick={play}>
              <VolumeUpIcon />
            </IconButton>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  )
}

export default DefaultAudioPlayer
