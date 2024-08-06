'use client';

// assets
import logo from '@/app/_assets/hand-circle.png';

// chakra-ui
import {
  Flex,
  Heading,
  Link,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

export default function Logo({ shouldLink = true, p = '0.3125rem 1.4375rem' }) {
  const text = 'Thought Co';
  const color = useColorModeValue('gray.700', 'gray.300');
  return (
    <>
      {shouldLink ? (
        <Link
          mr={'1.25rem'}
          minW={'fit-content'}
          href='/'
          _hover={{
            textDecoration: 'none',
            outline: '1px solid',
            outlineColor: 'purple.300',
          }}
          textDecoration={'none'}
          borderRadius={'9px'}
        >
          <LogoContent color={color} text={text} p={p} />
        </Link>
      ) : (
        <LogoContent color={color} text={text} p={p} />
      )}
    </>
  );
}

export const LogoContent = ({ color, text, p }) => {
  return (
    <Flex minW={'fit-content'} color={color} align={'center'} p={p}>
      <Image
        mr={'0.65rem'}
        src={logo.src}
        alt={'Thought Co logo'}
        height={'2rem'}
      />
      <Heading
        color={color}
        fontWeight={600}
        whiteSpace={'nowrap'}
        lineHeight={'1.56288rem'}
        letterSpacing={'-0.02688rem'}
        minW={'fit-content'}
        size={'sm'}
      >
        {text}
      </Heading>
    </Flex>
  );
};
