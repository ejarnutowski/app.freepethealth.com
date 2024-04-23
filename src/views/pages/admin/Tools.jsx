import React from 'react';
import { useMutation } from '@tanstack/react-query';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Header from 'src/views/components/headers/Default';
import api from 'src/services/api';

const Tools = React.memo(() => {

  const { mutate: purgeData } = useMutation({
    mutationFn: api.admin.tools.purge,
    onSuccess: data => {
      console.log('PURGE DATA', data);
      window.alert('Purge complete');
    },
  });

  return (
    <Box>
      <Header title='Admin Tools' />
      <Box sx={{ p: 4 }}>
        <Button color='danger' onClick={purgeData}>Purge All Data</Button>
      </Box>
    </Box>
  );
});

Tools.displayName = 'Tools';
export default Tools;
