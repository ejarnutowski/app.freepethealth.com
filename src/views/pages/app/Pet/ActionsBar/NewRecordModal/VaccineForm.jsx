import React, { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

const VaccineForm = React.memo(({ onChange }) => {

  const [name, setName] = useState(null);
  const [dateAdministered, setDateAdministered] = useState(null);

  useEffect(() => {
    onChange({
      name,
      dateAdministered,
    });
  }, [onChange, name, dateAdministered]);

  return (
    <Box>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Name</FormLabel>
        <Input variant='outlined' onChange={event => setName(event.target.value)} />
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Date Administered</FormLabel>
        <Input variant='outlined' onChange={event => setDateAdministered(event.target.value)} />
      </FormControl>
    </Box>
  );
});

VaccineForm.displayName = 'VaccineForm';
export default VaccineForm;
