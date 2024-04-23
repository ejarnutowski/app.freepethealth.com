import React from 'react';
import { Box } from '@mui/joy';

const styles = {
  reaction: {
    pl: 2,
  },
};

const AllergyDisplay = React.memo(({ data }) => {
  return (
    <Box sx={styles.container}>
      <Box>Allergy: <strong>{data.details.name}</strong></Box>
      <Box>Reactions: <strong>{data.details.dateAdministered}</strong></Box>
      {data.details.reactions?.map((reaction, index) => (
        <Box key={index} sx={styles.reaction}><strong>&#x2022; {reaction.severity}:</strong> {reaction.name}</Box>
      ))}
    </Box>
  );
});

AllergyDisplay.displayName = 'AllergyDisplay';
export default AllergyDisplay;
