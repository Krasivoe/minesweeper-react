import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Leaders from '../pages/Leaders/Leaders.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaders" element={<Leaders />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
