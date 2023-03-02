import React from 'react';
import { getRandomNumber } from '../../utils/getRandomNumber';

const Button = ({ getPraseRandom, setIndexBack, children }) => {
  const changeInfo = () => {
    getPraseRandom();
    const newIndexBack = getRandomNumber(0, 3);
    setIndexBack(newIndexBack);
  };
  return (
    <button
      className="px-5 py-2 bg-slate-50 bg-opacity-70 text-gray-700 rounded-lg  border- border-solid border-2 relative z-10"
      onClick={changeInfo}
    >
      {children}
    </button>
  );
};

export default Button;
