'use client';

// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

export default function HeroSection() {
  const { onModalOpen } = useInquiryModal();

  const headingColor = useColorModeValue('green.500', 'green.200');

  return (
    <Container
      maxW={'700px'}
      textAlign={'center'}
      p={{ base: '6rem 1rem 4rem 1rem', md: ' 10rem 1rem 5rem 1rem' }}
    >
      <Stack align={'center'}>
        <Heading size={'3xl'}>Launch with speed</Heading>
        <Heading color={headingColor} mb={'1rem'} size={'3xl'}>
          Grow with confidence
        </Heading>
        <Text mb={'1.5rem'}>
          SupaRocket propels your SaaS startup forward with unparalleled speed
          and scalability. Begin your venture with cutting-edge marketing
          websites, custom web applications, and comprehensive brand packages.
        </Text>
        <Flex gap={'1rem'}>
          <Button size={'sm'} colorScheme={'green'} onClick={onModalOpen}>
            Start your project
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
}
