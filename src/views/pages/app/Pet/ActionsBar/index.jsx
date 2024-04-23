import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from 'src/assets/icons/fontAwesome';
import NewRecordModal from './NewRecordModal';

const styles = {
  container: {
    pl: 4,
  },
};

const ActionsBar = React.memo(() => {

  const [showNewRecordModal, setShowNewRecordModal] = useState(false);

  return (
    <Box sx={styles.container}>
      <Button
        startDecorator={<FontAwesomeIcon icon={faPlus} />}
        onClick={() => setShowNewRecordModal(true)}>
        Add new record
      </Button>
      {showNewRecordModal ? <NewRecordModal onClose={() => setShowNewRecordModal(false)} /> : null}
    </Box>
  );
});

ActionsBar.displayName = 'ActionsBar';
export default ActionsBar;
