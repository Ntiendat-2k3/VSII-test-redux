import { memo } from 'react';
import Button from '@mui/material/Button';

const AppButton = memo(function AppButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
});

export default AppButton;
