import React from 'react';

const Author = ({ authorName }) => {
  return (
    <div className=" bottom- px-10 py-2 mt-40 bg-slate-300 bg-opacity-50 rounded-md relative z-10">
      {authorName}
    </div>
  );
};

export default Author;
