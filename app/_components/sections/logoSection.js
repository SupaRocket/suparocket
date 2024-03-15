'use client';

// images
import NextJsLogo from '@/app/_assets/nextLogo';
import SupabaseLogo from '@/app/_assets/supabaseLogo';
import FigmaLogo from '@/app/_assets/figmaLogo';
import ChakraLogo from '@/app/_assets/chakraLogo';

// chakra-ui
import {
  Box,
  Flex,
  Link,
  Text,
  Tooltip,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

// local components

export default function LogoSection() {
  const color = useColorModeValue('gray.600', 'gray.400');

  return (
    <VStack mb={'4rem'}>
      <Text color={color} fontSize={'0.85rem'} mb={'0.5rem'}>
        We build with modern technologies
      </Text>
      <Flex gap={'1.5rem'} justify={'center'} align={'center'}>
        <Link href='https://nextjs.org/' isExternal>
          <Tooltip hasArrow label='Next.js'>
            <Flex w={'3rem'} h={'3rem'} align={'center'} justify={'center'}>
              <Box w={'3rem'}>
                <NextJsLogo />
              </Box>
            </Flex>
          </Tooltip>
        </Link>

        <Link href='https://supabase.com/' isExternal>
          <Tooltip hasArrow label='Supabase'>
            <Flex w={'3rem'} h={'3rem'} align={'center'} justify={'center'}>
              <Box w={'2rem'}>
                <SupabaseLogo />
              </Box>
            </Flex>
          </Tooltip>
        </Link>

        <Link href='https://www.figma.com/' isExternal>
          <Tooltip hasArrow label='Figma'>
            <Flex w={'3rem'} h={'3rem'} align={'center'} justify={'center'}>
              <Box w={'1.5rem'}>
                <FigmaLogo />
              </Box>
            </Flex>
          </Tooltip>
        </Link>

        <Link href='https://www.chakra-ui.com/' isExternal>
          <Tooltip hasArrow label='Chakra UI'>
            <Flex w={'3rem'} h={'3rem'} align={'center'} justify={'center'}>
              <Box w={'2rem'}>
                <ChakraLogo />
              </Box>
            </Flex>
          </Tooltip>
        </Link>
      </Flex>
    </VStack>
  );
}
