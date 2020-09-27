import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const useGif = (tag = '') => {
  const [gif, setGif] = useState();
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

  return { gif, handleClick };
};

export default useGif;
