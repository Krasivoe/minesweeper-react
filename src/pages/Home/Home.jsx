import Settings from '../../components/Settings/Settings.jsx';
import { useState } from 'react';
import Game from '../../components/Game/Game.jsx';

const Home = () => {
  const [name, setName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
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

  return (
    <>
      {gameStarted ? (
        <Game data={setupData} setGameStarted={setGameStarted} name={name} />
      ) : (
        <Settings handleSetData={handleSetData} name={name} />
      )}
    </>
  );
};

export default Home;
