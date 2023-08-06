import Layout from './layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Router/>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;