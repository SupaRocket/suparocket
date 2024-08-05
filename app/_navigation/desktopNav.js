'use client';

// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';
// chakra-ui
import {
  Link,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function DesktopNavbar({ routes }) {
  const { onModalOpen } = useInquiryModal();

  return (
    <Flex align={'center'}>
      <Flex fontSize={'0.9rem'}>
        {routes.map((route) =>
          route.isMenu ? (
            <MenuLink
              key={route.name}
              name={route.name}
              menuItems={route.menuItems}
            />
          ) : (
            <NavLink
              key={route.name}
              name={route.name}
              path={route.path}
              icon={route.icon}
              target={route.target}
            />
          )
        )}
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
    <Link position={'relative'} m={'0 0.5rem'} target={target} href={path}>
      <Button
        size={'sm'}
        variant={'ghost'}
        borderRadius={'0.25rem'}
        _hover={{
          textDecoration: 'none',
          background: 'purple.100',
          color: 'purple.700',
          borderRadius: '0.35rem',
        }}
        p={'0.4rem 0.8rem'}
      >
        {name}
      </Button>
    </Link>
  );
};
const MenuLink = ({ name, menuItems }) => {
  return (
    <Menu
      position={'relative'}
      m={'0 0.5rem'}
      fontSize={'1rem'}
      fontWeight={500}
      textDecoration={'none'}
    >
      {({ isOpen }) => (
        <>
          <MenuButton
            size={'sm'}
            variant={'ghost'}
            borderRadius={'0.25rem'}
            _hover={{
              textDecoration: 'none',
              background: 'purple.100',
              color: 'purple.700',
              borderRadius: '0.35rem',
            }}
            p={'0.4rem 0.8rem'}
            as={Button}
            rightIcon={
              isOpen ? <ChevronUp size={17} /> : <ChevronDown size={17} />
            }
          >
            {name}
          </MenuButton>
          <MenuList>
            {menuItems.map((item) => (
              <MenuItem key={item.name} as={Link} href={item.path}>
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
