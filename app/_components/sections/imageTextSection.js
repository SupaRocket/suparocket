'use client';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Button,
  Link,
  useColorModeValue,
  Container,
  Image,
  AspectRatio,
} from '@chakra-ui/react';
import { MoveRight } from 'lucide-react';

export default function ImageTextSection({
  reversed = false,
  imageSrc,
  title,
  description,
  href,
}) {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      mb={{ base: '3rem' }}
      borderBottom={'1px solid'}
      borderColor={borderColor}
      p={{ base: '4rem 1rem', md: ' 2rem 1rem 4rem 1rem' }}
      direction={{
        base: 'column-reverse',
        md: reversed ? 'row-reverse' : 'row',
      }}
      w={'100%'}
      justify={'center'}
      align={'center'}
    >
      <Container
        maxW={{ base: '100%', md: '50%' }}
        p={{ base: '0', md: '2rem' }}
        mb={{ base: '3rem', md: '0' }}
      >
        <Heading mb={'1rem'} size={'xl'}>
          {title}
        </Heading>
        <Text mb={'2rem'}>{description}</Text>
        <Link href={href} maxW={'fit-content'}>
          <Button
            mr={'1rem'}
            colorScheme={'purple'}
            variant={'link'}
            rightIcon={<MoveRight size={17} />}
          >
            Learn more
          </Button>
        </Link>
      </Container>
      <Flex mb={{ base: '3rem', md: '0' }} justify={'flex-start'} w={'100%'}>
        <AspectRatio ratio={1} w={{ base: '100%', md: '500px' }}>
          <Image
            src={imageSrc}
            objectFit={'cover'}
            borderRadius={'9px'}
            alt={title}
          />
        </AspectRatio>
      </Flex>
    </Flex>
  );
}
