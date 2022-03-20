import React from 'react';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';
import { NavBar } from './components/layout/NavBar';
import {Loader} from './components/layout/Loader';


function App() {
  const {login, logout, token, userId, ready} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader/>
  }

  return (
      <AuthContext.Provider value={{
        token, userId, login, logout, isAuthenticated
      }}>
      { isAuthenticated && <NavBar/> }
        <div className="">
          {routes}
        </div>
      </AuthContext.Provider>
  );
}

export default App;
