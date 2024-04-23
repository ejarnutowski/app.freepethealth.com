import find from 'lodash/find';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box } from '@mui/joy';
import api from 'src/services/api';
import Header from 'src/views/components/headers/Default';
import AllergyDisplay from './AllergyDisplay';
import VaccineDisplay from './VaccineDisplay';

const Pet = React.memo(() => {

  const { petId, recordId } = useParams();

  const { data: pet } = useQuery({
    queryKey: ['pet', { petId }],
    queryFn: () => api.admin.pets.getOne(petId),
  });

  const { data: records } = useQuery({
    enabled: !!pet,
    queryKey: ['records', { petId }],
    queryFn: () => api.admin.pets.getRecords(petId),
  });

  let record = null;
  if (records?.length) {
    record = find(records, { _id: recordId });
  }

  return pet?.name && record?.type && (
    <Box>
      <Header title={`Admin Pets / ${pet.name} / ${record?.type} Record`} />
      <Box sx={{ p: 4 }}>
        {record.type === 'Allergy' && <AllergyDisplay data={record} />}
        {record.type === 'Vaccine' && <VaccineDisplay data={record} />}
      </Box>
    </Box>
  );
});

Pet.displayName = 'Pet';
export default Pet;
