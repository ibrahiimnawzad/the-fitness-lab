import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1320', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
              || item.target.toLowerCase().includes(search)
              || item.equipment.toLowerCase().includes(search)
              || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }, color: '#F2AA4CFF', letterSpacing: '5px' }} mb="49px" textAlign="center">
      No Lab Coats, <br /> Just Epic Workouts!
      </Typography>
      
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
<Button
  className="search-btn"
  sx={{
    transition: 'none',
    borderRadius: '20px',
    bgcolor: '#F2AA4CFF',
    color: '#101820',
    textTransform: 'none',
    width: { lg: '173px', xs: '80px' },
    height: '56px',
    position: 'absolute',
    right: '0px',
    fontSize: { lg: '20px', xs: '14px' },
    '&:hover': {
      bgcolor: '#e19d45',
      transition: '0.2s ease-in-out'
    },
  }}
  onClick={handleSearch}
>
  Search
</Button>

      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
//Workouts You Can Trust, From The Fitness Lab
//No Lab Coats, Just Epic Workouts!





