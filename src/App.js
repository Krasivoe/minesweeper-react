import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import AppRouter from './components/AppRouter.jsx';
import { UserContext } from './context/index.js';
import { useState } from 'react';

function App() {
  //const [users, setUsers] = useState([]);
  const [users, setUsers] = useState(
    localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  );

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
