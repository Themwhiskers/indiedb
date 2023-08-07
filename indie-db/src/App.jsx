import Layout from './layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { ThemeProvider } from './providers/ThemeProvider';
import { UserProvider } from './users/providers/UserProvider';
import { SnackbarProvider } from './providers/SnackbarProvider';

const App = () => {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <SnackbarProvider>
          <UserProvider>
            <Layout>
              <Router/>
            </Layout>
          </UserProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;