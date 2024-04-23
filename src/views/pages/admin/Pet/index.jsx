import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, Card } from '@mui/joy';
import api from 'src/services/api';
import Header from 'src/views/components/headers/Default';

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    p: 4,
  },
};

const Pet = React.memo(() => {

  const { id } = useParams();

  const { data: pet } = useQuery({
    queryKey: ['pet', { id }],
    queryFn: () => api.admin.pets.getOne(id),
  });

  const { data: records } = useQuery({
    enabled: !!pet,
    queryKey: ['records', { petId: pet?._id }],
    queryFn: () => api.admin.pets.getRecords(pet?._id),
  });

  return (
    <Box>
      <Header title={ pet ? `Pets / ${pet.name}` : null } />
      {records?.length ? (
        <Box sx={styles.list}>
          <h3>Records</h3>
          {records.map(record => (
            <NavLink key={record._id} to={`/admin/pets/${pet._id}/records/${record._id}`}>
              <Card sx={styles.listItem}>
                {record.type} | {record.details.name}
              </Card>
            </NavLink>
          ))}
        </Box>
      ) : null}
    </Box>
  );
});

Pet.displayName = 'Pet';
export default Pet;
