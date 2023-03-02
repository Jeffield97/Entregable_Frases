import React from 'react';
import './Card.css';
const Card = ({ children }) => {
  return (
    <div className="bg-slate-100 bg-opacity-90 border-stone-700 border-solid border w-2/5  my-10 p-5 rounded-lg relative z-0 font min-h-fit box-content card">
      {children}
      <img src="" alt="" />
    </div>
  );
};

export default Card;
