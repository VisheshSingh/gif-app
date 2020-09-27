import React, { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGif] = useState();
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const fetchGif = async () => {
    const response = await fetch(url);
    const resData = await response.json();
    const imageSrc = resData.data.images.downsized_large.url;
    setGif(imageSrc);
  };
  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className='random-gif'>
      <img src={gif} alt='gif' />
      <button onClick={handleClick}>Another one!</button>
    </div>
  );
};

export default Random;
