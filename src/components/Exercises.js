import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader'; 

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      setLoading(true); // Start loading when data fetch starts
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=1320',
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1320`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
      setLoading(false); // End loading once data is fetched
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px" sx={{ color: '#F2AA4CFF' }}>
        Showing Results
      </Typography>

      {/* Show loader if data is loading */}
      {loading ? (
        <Loader />
      ) : (
        <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise, index) => (
            <ExerciseCard exercise={exercise} key={index} />
          ))}
        </Stack>
      )}

      {/* Pagination */}
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            sx={{
              '.MuiPaginationItem-root': {
                color: '#F2AA4CFF', // Text color
              },
              '.MuiPaginationItem-root.Mui-selected': {
                backgroundColor: '#F2AA4CFF', // Selected page background
                color: '#101820', // Selected page text color
              },
            }}
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
