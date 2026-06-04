import React from 'react';
import Button from '@mui/material/Button';

const AppButton = React.memo(function AppButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
});

export default AppButton;
