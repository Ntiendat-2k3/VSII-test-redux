import React, { useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import AppHeading from '../ui/AppHeading';
import AppButton from '../ui/AppButton';

const NETWORK_ERROR_KEYWORDS = ['Network Error', 'ERR_INTERNET_DISCONNECTED', 'timeout'];

const containerSx = {
  py: 10,
  textAlign: 'center',
};

const iconContainerBaseSx = {
  width: 90,
  height: 90,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function ErrorState({ error, onRetry }) {
  const isNetworkError = useMemo(
    () => NETWORK_ERROR_KEYWORDS.some((keyword) => error?.includes(keyword)),
    [error]
  );

  const iconContainerSx = useMemo(
    () => ({
      ...iconContainerBaseSx,
      backgroundColor: (theme) =>
        alpha(
          isNetworkError ? theme.palette.secondary.main : theme.palette.error.main,
          0.1
        ),
      border: (theme) =>
        `2px solid ${alpha(
          isNetworkError ? theme.palette.secondary.main : theme.palette.error.main,
          0.25
        )}`,
    }),
    [isNetworkError]
  );

  const title = isNetworkError
    ? 'Không có kết nối mạng'
    : 'Đã xảy ra lỗi';

  const description = isNetworkError
    ? 'Vui lòng kiểm tra kết nối Internet của bạn và thử lại.'
    : error || 'Đã xảy ra lỗi không xác định. Vui lòng thử lại sau.';

  const IconComponent = isNetworkError ? WifiOffIcon : ErrorOutlinedIcon;
  const iconColor = isNetworkError ? 'secondary.main' : 'error.main';

  return (
    <Stack sx={containerSx} spacing={3} alignItems="center" className="fade-in">
      <Box sx={iconContainerSx}>
        <IconComponent sx={{ fontSize: 40, color: iconColor }} />
      </Box>

      <Stack spacing={1} alignItems="center">
        <AppHeading variant="h5">{title}</AppHeading>
        <AppHeading variant="body2" sx={{ maxWidth: 420 }}>
          {description}
        </AppHeading>
      </Stack>

      {onRetry && (
        <AppButton
          variant="contained"
          color={isNetworkError ? 'secondary' : 'primary'}
          onClick={onRetry}
          size="large"
          sx={{ mt: 1 }}
        >
          Thử lại
        </AppButton>
      )}
    </Stack>
  );
}

export default ErrorState;
