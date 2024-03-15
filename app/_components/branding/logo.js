'use client';

// assets
import logoSvg from '@/app/_assets/logo.svg';

// chakra-ui
import {
  Flex,
  Heading,
  Link,
  Box,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

// local components
import Underscore from './underscore';

export default function Logo({ shouldLink = true, p = '0.3125rem 1.4375rem' }) {
  const text = 'SupaRocket';
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
        pt={'0.25rem'}
        mr={'0.5rem'}
        src={logoSvg.src}
        alt={'SupaRocket logo'}
        height={'1.5rem'}
      />
      <Heading
        color={color}
        fontWeight={700}
        whiteSpace={'nowrap'}
        lineHeight={'1.56288rem'}
        letterSpacing={'-0.02688rem'}
        minW={'fit-content'}
        size={'md'}
      >
        {text}
      </Heading>
    </Flex>
  );
};
