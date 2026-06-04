import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import store from './store';
import theme from './theme/theme';
import BreedsPage from './pages/BreedsPage';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BreedsPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
