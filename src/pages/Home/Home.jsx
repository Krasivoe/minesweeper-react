import Settings from '../../components/Settings/Settings.jsx';
import { useState } from 'react';
import Game from '../../components/Game/Game.jsx';

const Home = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [name, setName] = useState('');
  const [setupData, setSetupData] = useState({
    width: 8,
    height: 8,
    mines: 8
  });

  const handleSetData = (data, name) => {
    setName(name);
    setSetupData(data);
    setGameStarted(true);
  };

  if (gameStarted) return <Game data={setupData} setGameStarted={setGameStarted}/>;
  return <Settings handleSetData={handleSetData} />;
};

export default Home;
