import { Routes, Route,Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ContextProvider from './store/ContextProvider';
import StoreContext from './store/StoreContext';
import { useContext } from 'react';
function App() {
  const context = useContext(StoreContext);
  
  return (
    <ContextProvider>
    <Layout>
      <Routes>
      <Route path='/' exact Component={HomePage}>
     
        </Route>
      { context.token == null && <Route exact path='/auth' Component={AuthPage}> </Route>}
      { localStorage.getItem("token") &&  <Route exact path='/profile'Component={UserProfile}>    </Route>}
       <Route exact path = '*' render = {() => <Navigate to = "/" /> }  />
        
       
      </Routes>
    </Layout>
    </ContextProvider>
  );
}

export default App;
