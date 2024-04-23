import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/joy';
import BottomMenu from './BottomMenu';
import SideMenu from './SideMenu';
import TopBar from './TopBar';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    height: '100dvh',
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100dvh',
    marginTop: {
      xs: '60px',
      lg: 0,
    },
    marginBottom: {
      xs: '100px',
      lg: 0,
    },
  }
};

const Default = React.memo(() => {
  return (
    <Box sx={styles.container}>
      <TopBar />
      <SideMenu />
      <BottomMenu />
      <Box sx={styles.main} component='main'>
        <Outlet />
      </Box>
    </Box>
  );
});

Default.displayName = 'Default';
export default Default;
