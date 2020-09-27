import React, { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState();
  const [tag, setTag] = useState('dogs');
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  const fetchGif = async () => {
    const response = await fetch(url);
    const resData = await response.json();
    const imageSrc = resData.data.images.downsized_large.url;
    setGif(imageSrc);
  };
  useEffect(() => {
    fetchGif();
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className='tag-gif'>
      <img src={gif} alt='gif' />
      <input type='text' value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Another one!</button>
    </div>
  );
};

export default Tag;
