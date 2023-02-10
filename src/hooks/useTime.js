import { useEffect, useState } from 'react';

export const useTime = () => {
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (seconds >= 9) return;/// 999 поставить
      setSeconds(seconds => seconds + 1);
    }, 1000);

    setTimer(time);

    return () => clearInterval(time);
  }, [seconds]);

  return [seconds, setSeconds, timer];
};
