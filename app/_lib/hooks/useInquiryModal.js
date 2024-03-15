'use client';

import { useRecoilState } from 'recoil';
import { isModalOpenState } from '@/app/_state/atoms';

export const useInquiryModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  const onModalClose = () => setIsModalOpen(false);
  const onModalOpen = () => setIsModalOpen(true);
  return {
    isModalOpen,
    setIsModalOpen,
    onModalClose,
    onModalOpen,
  };
};
