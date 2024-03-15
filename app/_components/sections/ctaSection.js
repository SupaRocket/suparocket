'use client';

// chakra-ui
import {
  Heading,
  Text,
  useColorModeValue,
  Box,
  Grid,
  GridItem,
  Container,
  ListItem,
  ListIcon,
  List,
  Highlight,
  Button,
} from '@chakra-ui/react';
import {
  AppWindowMac,
  Check,
  FlaskConical,
  Globe,
  SwatchBook,
} from 'lucide-react';

export default function CtaSection() {
  const mainColor = useColorModeValue('green.700', 'green.200');
  const secondaryColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Container
      borderTop={'1px solid'}
      borderColor={borderColor}
      maxW={'1100px'}
      mb={'5rem'}
      mt={'5rem'}
      pt={'5rem'}
      textAlign={'center'}
    >
      <Heading size={'lg'} mb={'3rem'} color={secondaryColor} fontWeight={500}>
        <Highlight
          styles={{
            fontWeight: 600,
            color: mainColor,
          }}
          query={'grow with confidence'}
        >
          Launch with speed, grow with confidence
        </Highlight>
      </Heading>
      <Button size={'sm'} colorScheme={'green'}>
        Start your project
      </Button>
    </Container>
  );
}
