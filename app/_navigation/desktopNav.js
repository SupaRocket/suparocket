'use client';

// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';
// chakra-ui
import { Link, Flex, useColorModeValue, Button, Image } from '@chakra-ui/react';

export default function DesktopNavbar({ routes }) {
  const { onModalOpen } = useInquiryModal();

  return (
    <Flex align={'center'}>
      <Flex fontSize={'0.9rem'}>
        {/* {routes.map((route) => (
          <NavLink
            key={route.name}
            name={route.name}
            path={route.path}
            icon={route.icon}
            target={route.target}
          />
        ))} */}
      </Flex>
      <Link ml={'1rem'}>
        <Button
          size={'sm'}
          p={'0.25rem 2rem'}
          colorScheme={'green'}
          onClick={onModalOpen}
        >
          Get Started
        </Button>
      </Link>
    </Flex>
  );
}

const NavLink = ({ name, path, target }) => {
  return (
    <Link
      position={'relative'}
      m={'0 0.5rem'}
      fontSize={'1rem'}
      fontWeight={500}
      textDecoration={'none'}
      borderRadius={'0.25rem'}
      _hover={{
        textDecoration: 'none',
        background: 'purple.100',
        color: 'purple.700',
        borderRadius: '0.35rem',
      }}
      target={target}
      href={path}
      p={'0.4rem 0.8rem'}
    >
      {name}
    </Link>
  );
};
