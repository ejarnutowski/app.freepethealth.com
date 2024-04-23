import React from 'react';
import Box from '@mui/joy/Box';
import logo from '/img/logo.svg';

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: {
      xs: 'flex',
      lg: 'none',
    },
    height: 60,
    width: '100dvw',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  logoImage: {
    height: 30,
  },
};

const BottomMenu = React.memo(() => {
  return (
    <Box sx={styles.container}>
      <Box
        sx={styles.logoImage}
        component='img'
        alt='Free Pet Health Logo'
        src={logo}
      />
    </Box>
  );
});

BottomMenu.displayName = 'BottomMenu';
export default BottomMenu;
