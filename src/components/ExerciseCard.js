import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#101820', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', '&:hover': {
      bgcolor: '#101820',
    }, }}>
        {exercise.bodyPart}
      </Button>

      <Button sx={{ ml: '21px', color: '#101820', background: '#F2AA4CFF', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', '&:hover': {
      bgcolor: '#F2AA4CFF',
    }, }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#101820" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
