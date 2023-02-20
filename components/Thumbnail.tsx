import React from 'react';
import { IMovie } from '../typings';
import Image from 'next/image';

interface IProps {
  movie: IMovie;
}

function Thumbnail({ movie }: IProps) {
  return (
    // Parent has to be relative or absolute for next/image
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className='rounded-sm object-cover md:rounded'
        fill
        alt=''
      />
    </div>
  );
}

export default Thumbnail;
