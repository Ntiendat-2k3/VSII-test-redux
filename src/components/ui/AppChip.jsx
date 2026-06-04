import { memo } from 'react';
import Chip from '@mui/material/Chip';

const AppChip = memo(function AppChip(props) {
  return <Chip {...props} />;
});

export default AppChip;
