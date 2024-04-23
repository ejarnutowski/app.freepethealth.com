import React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import Typography from '@mui/joy/Typography';
import { faDogSolid, faHouseMedicalSolid } from 'src/assets/icons/fontAwesome';
import logo from '/img/logo.svg';
import MenuItem from './MenuItem';

const menuItems = [
  {
    title: 'Home',
    href: '/',
    icon: faHouseMedicalSolid,
  },
  {
    title: 'Pets',
    href: '/pets',
    icon: faDogSolid,
  },
];

const styles = {
  container: {
    position: 'sticky',
    display: {
      xs: 'none',
      lg: 'flex',
    },
    flexDirection: 'column',
    height: '100dvh',
    width: 260,
    p: '10px',
    backgroundColor: '#FFFFFF',
    borderRight: '2px solid #EEEEEE',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    minHeight: 0,
    overflow: 'hidden auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    p: 2,
  },
  logoImage: {
    mr: 2,
    height: 40,
  },
  logoText: {
    fontSize: '1.2em',
    fontWeight: '700',
    color: '#000000',
    whiteSpace: 'nowrap',
  },
};

const SideMenu = React.memo(() => {

  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Box sx={styles.header}>
          <Box
            sx={styles.logoImage}
            component='img'
            alt='Free Pet Health Logo'
            src={logo}
          />
          <Typography
            component='div'
            sx={styles.logoText}>Free Pet Health</Typography>
        </Box>
        <List sx={{ pt: 3, gap: .5 }}>
          {menuItems.map(menuItem => <MenuItem key={menuItem.title} menuItem={menuItem} />)}
        </List>
      </Box>
    </Box>
  );
});

SideMenu.displayName = 'SideMenu';
export default SideMenu;
