import { memo } from 'react';
import Typography from '@mui/material/Typography';

const AppHeading = memo(function AppHeading({ children, ...props }) {
  return <Typography {...props}>{children}</Typography>;
});

export default AppHeading;
