import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  button: {
    py: '10px',
    pl: '1.1em',
    borderRadius: 5,
    transition: 'background-color .2s',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.05) !important',
    },
    '&.active': {
      backgroundColor: 'rgba(0,0,0,.1) !important',
    },
    '&.active *': {
      color: '#0c6bcb !important',
    },
  },
  buttonIcon: {
    color: '#CCCCCC',
    fontSize: '2em',
    width: '1em',
  },
  label: {
    color: '#BBBBBB',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
        <ListItemContent sx={{ pl: 1.2 }}>
          <Typography sx={styles.label}>{menuItem.title}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
});

MenuItem.displayName = 'MenuItem';
export default MenuItem;
