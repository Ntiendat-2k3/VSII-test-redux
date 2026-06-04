import React from 'react';
import Chip from '@mui/material/Chip';

const AppChip = React.memo(function AppChip(props) {
  return <Chip {...props} />;
});

export default AppChip;
