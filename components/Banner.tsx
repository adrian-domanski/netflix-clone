import React, { useEffect, useState } from 'react';
import { IMovie } from '../typings';
import Image from 'next/image';

interface IProps {
  netflixOriginals: IMovie[];
}

const Banner: React.FC<IProps> = ({ netflixOriginals }) => {
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div>
      <div>
        {/* <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt='poster'
        /> */}
      </div>
    </div>
  );
};

export default Banner;
