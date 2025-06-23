import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;

  const extraDetail = [
    {
      icon: 'Body Parts',
      name: bodyPart,
    },
    {
      icon: 'Target',
      name: target,
    },
    {
      icon: 'Equipments',
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' }, color: '#F2AA4CFF' }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>

        <hr className='navbar-hr' />
        
        <Stack>
          <Typography variant="h4" fontWeight={700} color="#F2AA4CFF" sx={{ marginBottom: '20px', letterSpacing: '5px' }}>
            Instructions:
          </Typography>
          <Stack gap="10px">
            {instructions?.map((instruction, index) => (
              <Typography key={index} sx={{ fontSize: { lg: '20px', xs: '16px' }, marginBottom: '10px', marginLeft: '15px'  }} color="#b5b5b5">
                {index + 1}. {instruction}
              </Typography>
            ))}
          </Stack>
        </Stack>
        <hr className='navbar-hr' />

        <Stack>
          <Typography sx={{color: '#F2AA4CFF', marginBottom: '20px', letterSpacing: '5px'}} variant='h4' fontWeight={700}>
                More Details
          </Typography>

          {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" alignItems="center">
            <Typography sx={{ fontSize: { lg: '26px', xs: '20px' }, color: '#b5b5b5', marginBottom: '10px', marginLeft: '15px' }}>
              {item.icon}: {item.name}
            </Typography>
          </Stack>
        ))}
        </Stack>

        
      </Stack>
    </Stack>
  );
};

export default Detail;
