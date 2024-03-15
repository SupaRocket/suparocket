'use client';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Link,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import { PanelsTopLeft } from 'lucide-react';

export default function HeroSection() {
  const textColor = useColorModeValue('gray.600', 'gray.400');
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
          <Link href='/'>
            <Button size={'sm'} colorScheme={'green'}>
              Start your project
            </Button>
          </Link>
          <Link href={'/'} color={textColor}>
            <Button
              size={'sm'}
              leftIcon={<PanelsTopLeft size={17} />}
              colorScheme={'gray'}
              variant={'outline'}
            >
              View portfolio
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Container>
  );
}
