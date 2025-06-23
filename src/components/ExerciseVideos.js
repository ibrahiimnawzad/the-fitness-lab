import React from 'react'
import { Box, Stack, Typography} from '@mui/material'


const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);

  if(!exerciseVideos.length) return 'loading..'


  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}, color: '#F2AA4CFF', textTransform: 'capitalize'}} p='20px'>
      <Typography variant='h3' mb='33px' sx={{letterSpacing: '5px'}}>
        Youtube Tutorials
      </Typography>

      <Stack justifyContent='flex-start' alignItems='center' flexWrap='wrap'
      sx={{
        flexDirection: {lg: 'row'},
        gap: {lg: '110px', xs: '0'}
      }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a key={index} 
          className='exercise-video' 
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank' 
          rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color='#F2AA4CFF'>
                {item.video.title}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>

    </Box>
  )
}

export default ExerciseVideos
