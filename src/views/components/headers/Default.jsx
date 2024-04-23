import React from 'react';
import { Box } from '@mui/joy';

const styles = {
  container: {
    display: 'flex',
    pl: {
      lg: 4,
    },
    justifyContent: {
      xs: 'center',
      lg: 'inherit',
    },
    h1: {
      fontSize: {
        xs: '1.2em',
        lg: '2em',
      },
    },
  },
};

const Header = React.memo(({ title }) => {
  return (
    <Box sx={styles.container}>
      <h1 style={styles.h1}>{title}</h1>
    </Box>
  );
});

Header.displayName = 'Header';
export default Header;
