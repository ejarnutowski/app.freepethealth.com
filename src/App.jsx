import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingGate from 'src/providers/LoadingGate';
import router from './router';
import store from './store';
import styles from './styles';
import theme from './theme';

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <LoadingGate>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={styles} />
          <RouterProvider router={router} />
        </CssVarsProvider>
      </LoadingGate>
    </QueryClientProvider>
  </Provider>
);

export default App;
