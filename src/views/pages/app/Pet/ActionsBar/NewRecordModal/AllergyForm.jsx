import React, { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';

const styles = {
  reactionTitle: {
    mt: 4,
    fontWeight: 'bold',
  },
  reaction: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      lg: 'row',
    },
  },
  reactionName: {
    flexGrow: 1,
    mt: 2,
    mr: {
      xs: 0,
      lg: 2,
    },
  },
  reactionSeverity: {
    mt: .5,
    mb: {
      xs: 1,
      lg: 0,
    },
    display: 'flex',
    flexGrow: 0,
    alignItems: 'end',
    '&>button': {
      flexGrow: {
        xs: 1,
      }
    },
  },
};

const initialReaction = { name: '', severity: 'Mild' };

const AllergyForm = React.memo(({ onChange }) => {

  const [name, setName] = useState('');
  const [reactions, setReactions] = useState([initialReaction]);

  useEffect(() => {
    onChange({
      name,
      reactions,
    });
  }, [onChange, name, reactions]);

  const addReaction = () => {
    setReactions([...reactions, initialReaction]);
  };

  const updateReaction = (index, property, value) => {
    const currentReaction = reactions[index];
    const updatedReaction = { ...currentReaction, [property]: value };
    const updatedReactions = [...reactions];
    updatedReactions[index] = updatedReaction;
    setReactions(updatedReactions);
  };

  return (
    <Box>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Name</FormLabel>
        <Input variant='outlined' value={name} onChange={event => setName(event.target.value)} />
      </FormControl>
      <Box sx={styles.reactionTitle}>Reactions</Box>
      {reactions.map((reaction, index) => (
        <Box key={index} sx={styles.reaction}>
          <FormControl sx={styles.reactionName}>
            <Input variant='outlined' value={reaction.name} onChange={event => updateReaction(index, 'name', event.target.value)} />
          </FormControl>
          <ToggleButtonGroup sx={styles.reactionSeverity} value={reaction.severity} onChange={(event, newValue) => updateReaction(index, 'severity', newValue)}>
            <Button value='Mild'>Mild</Button>
            <Button value='Severe'>Severe</Button>
          </ToggleButtonGroup>
        </Box>
      ))}
      <Button sx={{ mt: 2 }} variant='outlined' onClick={addReaction}>Add Reaction</Button>
    </Box>
  );
});

AllergyForm.displayName = 'AllergyForm';
export default AllergyForm;
