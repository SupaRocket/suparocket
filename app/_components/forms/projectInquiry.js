'use client';

// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';

// components
import {
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { FilloutStandardEmbed } from '@fillout/react';

export default function ProjectInquiry() {
  const { isModalOpen, onModalClose } = useInquiryModal();
  return (
    <Modal size={'full'} isOpen={isModalOpen} onClose={onModalClose}>
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          p={{ base: '1rem', md: '1rem' }}
          maxH={{ base: '90vh', md: '100%' }}
          mt={{ base: '2rem', md: '2rem' }}
        >
          <FilloutStandardEmbed dynamicResize filloutId='qgL3n755Geus' />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
