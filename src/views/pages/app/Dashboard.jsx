import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDogSolid } from 'src/assets/icons/fontAwesome';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Header from 'src/views/components/headers/Default';

const styles = {
  card: {
    width: {
      xs: '100%',
      lg: 300,
    },
    ':hover': {
      backgroundColor: 'background.level1',
    },
  },
  cardIconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardIcon: {
    fontSize: 80,
    width: '1em',
  },
  cardTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.5em',
    fontWeight: 700,
  },
};

const Dashboard = React.memo(() => {
  return (
    <Box>
      <Header title='Dashboard' />
      <Box sx={{ p: 4 }}>
        <Card
          component={NavLink}
          to='/pets'
          size='lg'
          sx={styles.card}
        >
          <Box sx={styles.cardIconContainer}>
            <FontAwesomeIcon icon={faDogSolid} style={styles.cardIcon} />
          </Box>
          <Box sx={styles.cardTitle}>Pets</Box>
        </Card>
      </Box>
    </Box>
  );
});

Dashboard.displayName = 'Dashboard';
export default Dashboard;
