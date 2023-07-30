import Layout from './layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Router/>
      </Layout>
    </BrowserRouter>
  );
};

export default App;