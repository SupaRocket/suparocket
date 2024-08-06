'use client';

// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';

// chakra-ui
import {
  Link,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  VStack,
  Heading,
  Box,
  useColorModeValue,
  Button,
  Image,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from '@chakra-ui/react';
import { Menu } from 'lucide-react';

// local components
import Logo from '../_components/branding/logo';
import ColorModeToggle from '../_components/interactive/colorModeToggle';

export default function MobileNavbar({ routes }) {
  const { onModalOpen } = useInquiryModal();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonVariant = useColorModeValue('ghost', 'solid');

  return (
    <>
      <Flex align={'center'} gap={'1rem'}>
        <Button onClick={onOpen} variant={buttonVariant}>
          <Menu size={20} />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement='top' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo p={0} />
            <ColorModeToggle />
          </DrawerHeader>
          <DrawerBody minH={'50vh'} w={'100%'}>
            <VStack w={'100%'} fontSize={'0.9rem'} align={'flex-start'}>
              {routes.map((route, index) =>
                route.isMenu ? (
                  <Box key={index}>
                    <Heading mt={'1rem'} size={'md'}>
                      {route.name}
                    </Heading>
                    {route.menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        name={item.name}
                        path={item.path}
                        icon={item.icon}
                        target={item.target}
                      />
                    ))}
                  </Box>
                ) : (
                  <NavLink
                    key={route.name}
                    name={route.name}
                    path={route.path}
                    icon={route.icon}
                    target={route.target}
                    index={index}
                    routesLength={routes.length}
                  />
                )
              )}
              <Box m={'2rem 0 1rem 0'} w={'100%'}>
                <Button
                  w={'100%'}
                  p={'0.25rem 2rem'}
                  onClick={onModalOpen}
                  colorScheme={'teal'}
                >
                  Start your project
                </Button>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const NavLink = ({ name, path, icon, target, index, routesLength }) => {
  return (
    <Link
      w={'100%'}
      borderBottom={index === routesLength - 1 ? 'none' : '1px solid'}
      borderColor={'gray.200'}
      position={'relative'}
      textDecoration={'none'}
      _hover={{
        textDecoration: 'none',
      }}
      target={target}
      href={path}
      p={'1rem 1rem 1rem 0'}
    >
      <Flex>
        <Heading maxW={'fit-content'} size={'md'} fontWeight={500}>
          {name}
        </Heading>
        {icon && icon}
      </Flex>
    </Link>
  );
};

const AccordionLink = ({ name, menuItems }) => {
  return (
    <Accordion w={'100%'} allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} w={'100%'} border={'none'}>
          <VStack w={'100%'} fontSize={'0.9rem'} align={'flex-start'}></VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
