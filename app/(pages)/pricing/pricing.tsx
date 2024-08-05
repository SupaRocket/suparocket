'use client';
// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';

// chakra-ui
import {
  Box,
  Heading,
  Stack,
  Text,
  Container,
  Button,
  Flex,
} from '@chakra-ui/react';
import { MoveRight } from 'lucide-react';

import PricingTable from './pricingTable';
import { pricing } from '@/app/_lib/contants/pricing';

export default function Pricing() {
  const { onModalOpen } = useInquiryModal();

  return (
    <Box p={{ base: '3rem 0', md: '6rem 3rem' }} fontSize={'1.1rem'}>
      <Container
        maxW={'650px'}
        mb={{ base: '1rem', md: '4rem' }}
        h={'fit-content'}
        position={'relative'}
      >
        <Stack
          align={'center'}
          textAlign={'center'}
          pb={'3rem'}
          mb={'4rem'}
          w={'100%'}
        >
          <Heading size={'lg'}> Predictable pricing</Heading>
          <Text mb={'2rem'}>
            Start your project with confidence. We offer a range of packages to
            suit your needs, from basic websites to full-service digital
            marketing solutions.
          </Text>
          <Button
            onClick={onModalOpen}
            size={'sm'}
            maxW={'fit-content'}
            colorScheme={'purple'}
            mr={'1rem'}
            rightIcon={<MoveRight size={17} />}
          >
            Start your project
          </Button>
        </Stack>
      </Container>
      <Flex
        justify={{ base: 'flex-start', md: 'space-between' }}
        gap={{ base: '1rem', md: 0 }}
        direction={{ base: 'column', md: 'row' }}
        w={'100%'}
        px={{ base: '1rem', md: 0 }}
      >
        {pricing.map((item, index) => (
          <PricingTable key={index} index={index} price={item} />
        ))}
      </Flex>
    </Box>
  );
}
