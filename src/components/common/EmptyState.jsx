import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import AppHeading from '../ui/AppHeading';

const iconContainerSx = {
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
  border: (theme) => `2px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
};

const containerSx = {
  py: 10,
  textAlign: 'center',
};

const iconSx = {
  fontSize: 36,
  color: 'text.secondary',
};

const headingSx = {
  color: 'text.secondary',
};

function EmptyState({ message = 'Không tìm thấy giống chó nào.' }) {
  return (
    <Stack sx={containerSx} spacing={3} alignItems="center" className="fade-in">
      <Box sx={iconContainerSx}>
        <PetsIcon sx={iconSx} />
      </Box>
      <AppHeading variant="h6" sx={headingSx}>
        {message}
      </AppHeading>
    </Stack>
  );
}

export default EmptyState;
