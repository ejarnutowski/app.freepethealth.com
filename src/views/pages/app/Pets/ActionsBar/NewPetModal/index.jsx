import React, { useCallback, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import api from 'src/services/api';
import BaseModal from 'src/views/components/modals/BaseModal';
import PetForm from './PetForm';

const styles = {
  container: {
    p: 4,
  },
  actions: {
    display: 'flex',
    justifyContent: 'right',
    pt: 4,
  },
};

const NewPetModal = React.memo(({ onClose }) => {

  const queryClient = useQueryClient();
  const [isSaving, setIsSaving] = useState(null);
  const [pet, setPet] = useState(null);

  const mutation = useMutation({
    mutationFn: api.pets.create,
    onSuccess: data => {
      queryClient.setQueryData(['pets'], oldData => [...oldData, data])
      onClose();
    },
  });

  const onChange = useCallback(pet => {
    setPet(pet);
  }, [setPet]);

  const savePet = () => {
    if (!pet.name?.length) return;
    if (!pet.type?.length) return;
    if (!pet.dateOfBirth?.length) return;
    setIsSaving(true);
    mutation.mutate(pet);
  };

  return (
    <BaseModal title='Add new pet' onClose={onClose}>
      <Box sx={styles.container}>
        <PetForm onChange={onChange} />
        <Box sx={styles.actions}>
          <Button variant='outlined' color='neutral' onClick={onClose}>Cancel</Button>
          <Button sx={{ ml: 2 }} loading={isSaving} onClick={savePet}>Save Pet</Button>
        </Box>
      </Box>
    </BaseModal>
  );
});

NewPetModal.displayName = 'NewPetModal';
export default NewPetModal;
