import { DocumentData } from 'firebase/firestore';
import { atom } from 'recoil';
import { IMovie } from '../typings';

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const movieState = atom<IMovie | DocumentData | null>({
  key: 'movieState',
  default: null,
});
