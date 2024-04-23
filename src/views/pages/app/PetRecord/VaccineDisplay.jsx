import React from 'react';
import { Box } from '@mui/joy';

const VaccineDisplay = React.memo(({ data }) => {
  return (
    <Box>
      <Box>Vaccine: <strong>{data.details.name}</strong></Box>
      <Box>Date administered: <strong>{data.details.dateAdministered}</strong></Box>
      <Box>Record created: <strong>{data.createdAt}</strong></Box>
    </Box>
  );
});

VaccineDisplay.displayName = 'VaccineDisplay';
export default VaccineDisplay;
