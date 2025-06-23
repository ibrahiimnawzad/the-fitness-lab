import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/new-logo.png';

const Footer = () => (
  <Box mt="80px">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
    </Stack>
    <Typography sx={{ fontSize: { lg: '20px', xs: '16px' }, color: '#F2AA4CFF', letterSpacing: '5px' }} mt="41px" textAlign="center" pb="40px">&copy; 2024 ibrahiimnawzad. All Rights Reserved.</Typography>
  </Box>
);

export default Footer;
