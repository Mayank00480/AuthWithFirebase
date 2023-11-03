import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ContextProvider from './store/ContextProvider';

function App() {
  return (
    <ContextProvider>
    <Layout>
      <Routes>
      <Route path='/' exact Component={HomePage}>
     
        </Route>
        <Route path='/auth' Component={AuthPage}>
         
        </Route>
        <Route path='/profile'Component={UserProfile}>
     
        </Route>
      </Routes>
    </Layout>
    </ContextProvider>
  );
}

export default App;
