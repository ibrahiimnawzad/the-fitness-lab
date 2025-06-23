import React from 'react'
import { Stack, Typography } from '@mui/material'

// Map of body parts to their respective image paths
const bodyPartImages = {
    'all': require('../assets/icons/all-icon.png'),
    'chest': require('../assets/icons/chest-icon.png'),
    'back': require('../assets/icons/back-icon.jpeg'),
    'cardio': require('../assets/icons/cardio-icon11.png'),
    'lower arms': require('../assets/icons/lower-arms-icon7.jpeg'),
    'lower legs': require('../assets/icons/lower-legs-icon.png'),
    'neck': require('../assets/icons/neck-icon.jpeg'),
    'shoulders': require('../assets/icons/shoulders-icon.jpeg'),
    'upper arms': require('../assets/icons/upper-arms-icon.png'),
    'upper legs': require('../assets/icons/upper-legs-icon2.png'),
    'upper legs': require('../assets/icons/upper-legs-icon2.png'),
    'waist': require('../assets/icons/waist-icon.png'),
}

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #F2AA4CFF' : '',
        backgroundColor: '#FFF',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
    >
      {/* Render the appropriate image based on the body part */}
      <img
        src={bodyPartImages[item]} 
        alt={item} 
        style={{ width: '60px', height: '60px', objectFit: 'cover'}} 
      />
      <Typography fontSize='24px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
