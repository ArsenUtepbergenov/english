import { Box, Grid, IconButton, Typography } from '@mui/material'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'

const audio = new Audio()

function DefaultAudioPlayer({ word, phonetics, audioUrl }) {
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
