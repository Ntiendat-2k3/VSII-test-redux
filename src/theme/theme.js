import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BFA6',
      light: '#5DF2D6',
      dark: '#008E76',
      contrastText: '#0A0F1C',
    },
    secondary: {
      main: '#FFB74D',
      light: '#FFE97D',
      dark: '#C88719',
      contrastText: '#0A0F1C',
    },
    background: {
      default: '#0A0F1C',
      paper: '#121829',
    },
    text: {
      primary: '#E8ECF4',
      secondary: '#8B95A8',
    },
    error: {
      main: '#FF6B6B',
    },
    success: {
      main: '#69F0AE',
    },
    divider: alpha('#E8ECF4', 0.08),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    subtitle1: {
      fontSize: '1.1rem',
      color: '#8B95A8',
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.7,
      color: '#8B95A8',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#2A3150 transparent',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: alpha('#1A2238', 0.7),
          backdropFilter: 'blur(20px)',
          border: `1px solid ${alpha('#E8ECF4', 0.06)}`,
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            border: `1px solid ${alpha('#00BFA6', 0.3)}`,
            boxShadow: `0 20px 40px ${alpha('#00BFA6', 0.12)}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '0.75rem',
          letterSpacing: '0.03em',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '10px 24px',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#E8ECF4', 0.06),
        },
      },
    },
  },
});

export default theme;
