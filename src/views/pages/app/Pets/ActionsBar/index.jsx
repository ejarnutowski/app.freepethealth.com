import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from 'src/assets/icons/fontAwesome';
import NewPetModal from './NewPetModal';

const styles = {
  container: {
    pl: 4,
  },
};

const ActionsBar = React.memo(() => {

  const [showNewPetModal, setShowNewPetModal] = useState(false);

  return (
    <Box sx={styles.container}>
      <Button
        startDecorator={<FontAwesomeIcon icon={faPlus} />}
        onClick={() => setShowNewPetModal(true)}>
        Add new pet
      </Button>
      {showNewPetModal ? <NewPetModal onClose={() => setShowNewPetModal(false)} /> : null}
    </Box>
  );
});

ActionsBar.displayName = 'ActionsBar';
export default ActionsBar;
