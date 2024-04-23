import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import api from 'src/services/api';
import BaseModal from 'src/views/components/modals/BaseModal';
import AllergyForm from './AllergyForm';
import VaccineForm from './VaccineForm';

const styles = {
  container: {
    p: 4,
    overflowY: 'auto',
  },
  toggle: {
    display: 'flex',
    '&>button': {
      flexGrow: 1,
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'right',
    pt: 4,
  },
};

const NewRecordModal = React.memo(({ onClose }) => {

  const { id } = useParams();
  const queryClient = useQueryClient();

  const [isSaving, setIsSaving] = useState(null);
  const [recordType, setRecordType] = useState(null);
  const [recordDetails, setRecordDetails] = useState(null);

  const { mutate } = useMutation({
    mutationFn: api.pets.createRecord,
    onSuccess: data => {
      queryClient.setQueryData(['records', { petId: id }], oldData => [...oldData, data])
      onClose();
    },
  });

  const onUpdateRecord = useCallback(recordDetails => {
    setRecordDetails(recordDetails);
  }, []);

  const onToggleRecordType = useCallback((event, value) => {
    if (!value) return;
    setRecordType(value);
  }, []);

  const saveRecord = () => {
    setIsSaving(true);
    mutate({
      id,
      data: {
        type: recordType,
        details: recordDetails,
      }
    })
  };


  return (
    <BaseModal title='Add new record' onClose={onClose}>
      <Box sx={styles.container}>
        <ToggleButtonGroup sx={styles.toggle} value={recordType} onChange={onToggleRecordType}>
          <Button value='Allergy'>Allergy</Button>
          <Button value='Vaccine'>Vaccine</Button>
        </ToggleButtonGroup>
        {recordType === 'Allergy' ? <AllergyForm onChange={onUpdateRecord} /> : null}
        {recordType === 'Vaccine' ? <VaccineForm onChange={onUpdateRecord} /> : null}
        <Box sx={styles.actions}>
          <Button variant='outlined' color='neutral' onClick={onClose}>Cancel</Button>
          {recordType && (
            <Button sx={{ ml: 2 }} loading={isSaving} onClick={saveRecord}>Save Record</Button>
          )}
        </Box>
      </Box>
    </BaseModal>
  );
});

NewRecordModal.displayName = 'NewRecordModal';
export default NewRecordModal;
