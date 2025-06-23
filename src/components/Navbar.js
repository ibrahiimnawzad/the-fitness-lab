import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/new-logo.png';

const Navbar = () => (
  <div>
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none', scrollBehavior:'smooth' }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '65px', height: '65px', margin: '0px 20px' }} />
      </Link>
      
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" className='navbar-item'>Home</Link>
        <a href="#exercises" className='navbar-item'>Exercises</a>
      </Stack>
    </Stack>
    <hr className='navbar-hr' />


  </div>
);

export default Navbar;
