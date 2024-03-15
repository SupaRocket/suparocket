'use client';

// hooks
import { useEffect, useState } from 'react';
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';

// components
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Highlight,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from '../_components/branding/logo';

export default function Footer() {
  const { onModalOpen } = useInquiryModal();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('green.400', 'purple.200');
  const borderColor = useColorModeValue('green.100', 'gray.600');

  return (
    <>
      {isClient && (
        <footer>
          <Box
            background={bg}
            borderTop={'1px solid'}
            borderColor={borderColor}
          >
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              p={{ base: '4rem 2rem 2rem 2rem', md: '7rem 2rem 5rem 2rem' }}
            >
              <Stack
                borderBottom={{
                  base: '1px solid',
                  md: 'none',
                }}
                borderColor={borderColor}
                mb={{ base: '3rem', md: '0' }}
                pb={{ base: '3rem', md: '0' }}
                maxW={'25rem'}
                mr={{ base: 0, md: '7rem' }}
              >
                <Logo p={'0.5rem 0'} shouldLink={false} />
                <Text>
                  <Highlight
                    query={'SupaRocket'}
                    styles={{
                      fontWeight: 600,
                      color: color,
                    }}
                  >
                    SupaRocket accelerates SaaS startups&apos; journey to
                    success by crafting bespoke marketing websites, web
                    applications, and brand packages with precision and
                    creativity.
                  </Highlight>
                </Text>
              </Stack>
              <Flex gap={'3rem'} flexDirection={{ base: 'column', md: 'row' }}>
                <Box>
                  <Heading size={{ base: 'md' }} mb={'0.5rem'}>
                    Services
                  </Heading>
                  <Stack gap={0}>
                    <Link href='/services/marketing-websites'>
                      Marketing Websites
                    </Link>
                    <Link href='/services/web-applications'>
                      Web Applications
                    </Link>
                    <Link href='/services/brand-packages'>Brand Packages</Link>
                    <Link href='/services/ux-design'>UX Design</Link>
                  </Stack>
                </Box>
                <Box>
                  <Heading size={{ base: 'md' }} mb={'0.5rem'}>
                    Connect
                  </Heading>
                  <Stack gap={0}>
                    <Link onClick={onModalOpen}>Contact</Link>
                  </Stack>
                </Box>
              </Flex>
            </Flex>
            <Flex
              borderTop={'1px solid'}
              borderColor={borderColor}
              justify={'center'}
              flexDirection={'column'}
              textAlign={'center'}
              p={'2rem 1rem 1.5rem 1rem'}
              m={'0 2rem'}
            >
              <Text fontSize={'0.8rem'}>
                © 2024 Thought Co, All Rights reserved
              </Text>
            </Flex>
          </Box>
        </footer>
      )}
    </>
  );
}
