import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: .5,
    borderRadius: '50%',
    backgroundColor: 'transparent !important',
    '&.active *': {
      color: '#0c6bcb !important',
    },
  },
  buttonIcon: {
    color: '#CCCCCC',
    height: '30px',
  },
  label: {
    color: '#CCCCCC',
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
  },
};

const MenuItem = React.memo(({ menuItem }) => {
  return (
    <ListItem>
      <ListItemButton
        component={NavLink}
        to={menuItem.href}
        sx={styles.button}
      >
        <FontAwesomeIcon icon={menuItem.icon} style={styles.buttonIcon} />
        <Typography sx={styles.label}>{menuItem.title}</Typography>
      </ListItemButton>
    </ListItem>
  );
});

MenuItem.displayName = 'MenuItem';
export default MenuItem;
