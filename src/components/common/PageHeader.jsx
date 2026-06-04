import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import AppHeading from '../ui/AppHeading';

const gradientDotSx = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #00BFA6, #5DF2D6)',
  boxShadow: '0 0 12px rgba(0, 191, 166, 0.5)',
};

const containerSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  py: 6,
  px: 2,
  width: '100%',
};

const subtitleSx = {
  maxWidth: 600,
  mx: 'auto',
  mt: 1,
  textAlign: 'center',
};

const countBadgeSx = {
  px: 2,
  py: 0.5,
  borderRadius: 3,
  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
  border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  width: 'fit-content',
  mx: 'auto',
};

function PageHeader({ title, subtitle, count }) {
  return (
    <Stack sx={containerSx} spacing={2} className="slide-up">
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={gradientDotSx} />
        <AppHeading variant="h1" component="h1" sx={{ textAlign: 'center' }}>
          {title}
        </AppHeading>
        <Box sx={gradientDotSx} />
      </Stack>

      {subtitle && (
        <AppHeading variant="subtitle1" sx={subtitleSx}>
          {subtitle}
        </AppHeading>
      )}

      {count != null && (
        <Box sx={countBadgeSx}>
          <AppHeading variant="body2" sx={{ color: 'primary.light', fontWeight: 600, textAlign: 'center' }}>
            {count} giống chó
          </AppHeading>
        </Box>
      )}
    </Stack>
  );
}

export default PageHeader;
