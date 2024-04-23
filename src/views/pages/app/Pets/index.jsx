import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, Card } from '@mui/joy';
import api from 'src/services/api';
import Header from 'src/views/components/headers/Default';
import ActionsBar from './ActionsBar';

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    p: 4,
  },
};

const Pets = React.memo(() => {

  const { data: pets } = useQuery({
    queryKey: ['pets'],
    queryFn: () => api.pets.get(),
  });

  return (
    <Box>
      <Header title='Pets' />
      <ActionsBar />
      <Box sx={styles.list}>
        {pets && pets.map(pet => (
          <NavLink key={pet._id} to={`/pets/${pet._id}`}>
            <Card sx={styles.listItem}>
              {pet.type} | {pet.name}
            </Card>
          </NavLink>
        ))}
      </Box>
    </Box>
  );
});

Pets.displayName = 'Pets';
export default Pets;
