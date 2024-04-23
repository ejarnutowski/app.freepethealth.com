import React from 'react';
import { Box } from '@mui/joy';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    height: '100dvh',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const NotFound = React.memo(() => {
  return (
    <Box sx={styles.container}>
      Sorry, this page does not exist.
    </Box>
  );
});

NotFound.displayName = 'NotFound';
export default NotFound;
