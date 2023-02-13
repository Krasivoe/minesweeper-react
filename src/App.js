import './styles/App.scss';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import AppRouter from './components/AppRouter.jsx';
import { UserContext } from './context/index.js';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState(
    localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  );

  return (
    <HashRouter>
      <UserContext.Provider
        value={{
          users,
          setUsers
        }}
      >
        <div className="wrapper">
          <Header />
          <div className="container app">
            <AppRouter />
          </div>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
