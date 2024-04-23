import React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import { faDogSolid, faHouseMedicalSolid } from 'src/assets/icons/fontAwesome';
import MenuItem from './MenuItem';

const menuItems = [
  {
    title: 'Home',
    href: '/admin',
    icon: faHouseMedicalSolid,
    end: true,
  },
  {
    title: 'Pets',
    href: '/admin/pets',
    icon: faDogSolid,
  },
];

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: {
      xs: 'flex',
      lg: 'none',
    },
    height: 100,
    width: '100dvw',
    backgroundColor: '#FFFFFF',
    borderTop: '2px solid #EEEEEE',
    zIndex: 100,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 1,
    gap: 2,
  },
};

const BottomMenu = React.memo(() => {
  return (
    <Box sx={styles.container}>
      <List sx={styles.list}>
        {menuItems.map(menuItem => <MenuItem key={menuItem.title} menuItem={menuItem} />)}
      </List>
    </Box>
  );
});

BottomMenu.displayName = 'BottomMenu';
export default BottomMenu;
