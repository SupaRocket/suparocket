// recoil
import { atom } from 'recoil';

// ui atoms
export const isLoadingState = atom({
  key: 'isLoadingState',
  default: true,
});

export const isModalOpenState = atom({
  key: 'isModalOpenState',
  default: false,
});
