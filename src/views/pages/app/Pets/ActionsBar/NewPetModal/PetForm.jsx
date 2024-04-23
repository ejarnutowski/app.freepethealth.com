import React, { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';

const petTypes = ['Dog','Cat','Rabbit','Hamster','Parrot','Guinea Pig','Fish','Turtle','Lizard','Ferret','Snake','Hedgehog','Chinchilla','Gecko','Tarantula','Frog','Pigeon','Rat','Sugar Glider','Chicken'];

const PetForm = React.memo(({ onChange }) => {

  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  useEffect(() => {
    onChange({
      name,
      type,
      dateOfBirth,
    });
  }, [onChange, name, type, dateOfBirth]);

  return (
    <Box>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel required>Name</FormLabel>
        <Input variant='outlined' onChange={event => setName(event.target.value)} />
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel required>Type</FormLabel>
        <Select variant='outlined' onChange={(event, newValue) => setType(newValue)}>
          {petTypes.map(petType => (
            <Option key={petType} value={petType}>{petType}</Option>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel required>Date Of Birth</FormLabel>
        <Input variant='outlined' onChange={event => setDateOfBirth(event.target.value)} />
      </FormControl>
    </Box>
  );
});

PetForm.displayName = 'PetForm';
export default PetForm;
