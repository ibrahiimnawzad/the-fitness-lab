import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner1.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#F2AA4CFF" fontWeight="600" fontSize="30px" sx={{ letterSpacing: '5px' }}>
      The Fitness Lab
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }, color: '#b5b5b5' }} mb="23px" mt="30px">
      Master The Science<br />
      Of Exercise
    </Typography>
    
    {/* Conditionally render different text based on screen size */}
    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      sx={{
        display: { xs: 'block', lg: 'none' },
        color: "#b5b5b5"
      }}
    >
      Explore the Lab and Build Your Strongest Self.
    </Typography>

    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      sx={{
        display: { xs: 'none', lg: 'block' }, color: "#b5b5b5"
      }}
    >
      Step into the Lab, Discover New Strengths,<br />and Push Your Limits with Every Rep.
    </Typography>
    
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#F2AA4CFF',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: '#101820ff',
          borderRadius: '4px',
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#F2AA4CFF"
      sx={{
        opacity: '0.7',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
        letterSpacing: '25px',
        background: 'linear-gradient(to bottom, transparent 50%, #f9a23049 50%)'
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{
        objectFit: 'cover',
        borderRadius: '15px',
      }}
    />
  </Box>
);

export default HeroBanner;
