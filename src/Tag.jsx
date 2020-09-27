import React, { useState } from 'react';
import useGif from './hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  const { gif, handleClick } = useGif(tag);

  return (
    <div className='tag-gif'>
      <img src={gif} alt='gif' />
      <input type='text' value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Another one!</button>
    </div>
  );
};

export default Tag;
