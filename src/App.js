import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import AppRouter from './components/AppRouter.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="container app">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
