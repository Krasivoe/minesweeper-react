import Settings from '../../components/Settings/Settings.jsx';
import { useState } from 'react';
import Game from '../../components/Game/Game.jsx';

const Home = () => {
  const [level, setLevel] = useState('easy');
  const [isStart, setIsStart] = useState(false);
  const [fields, setFields] = useState([]);

  return (
    <div>
      {/*<Game />*/}
      <Settings />
    </div>
  );
};

export default Home;
