import React from 'react';
import useGif from './hooks/useGif';

const Random = () => {
  const { gif, handleClick } = useGif();

  return (
    <div className='random-gif'>
      <img src={gif} alt='gif' />
      <button onClick={handleClick}>Another one!</button>
    </div>
  );
};

export default Random;
