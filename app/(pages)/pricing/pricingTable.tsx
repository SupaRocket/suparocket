'use client';

// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';

// chakra-ui
import {
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Check } from 'lucide-react';

export default function PricingTable({ index, price }) {
  const { onModalOpen } = useInquiryModal();
  const isPro = price.title === 'Pro';
  const isMax = price.title === 'Max';

  const bg = useColorModeValue('gray.100', 'gray.900');
  const border = useColorModeValue('gray.300', 'gray.700');
  const proBorder = useColorModeValue('gray.400', 'gray.600');
  const checkColor = useColorModeValue('green.500', 'green.300');
  const altColor = useColorModeValue('gray.600', 'gray.400');
  return (
    <VStack
      align={'flex-start'}
      w={{ base: '100%', md: '33%' }}
      flexGrow={1}
      bg={bg}
      borderRadius={{
        base: '1rem',
        md: isPro ? '1rem' : index === 0 ? '1rem 0 0 1rem' : '0 1rem 1rem 0',
      }}
      border={isPro ? '2px solid' : '1px solid'}
      borderColor={isPro ? proBorder : border}
      my={{ base: '0', md: isPro ? '0' : '1rem' }}
      mx={0}
      p={'2rem'}
      gap={'1rem'}
    >
      <Flex align={'center'}>
        <Heading size={'lg'} textTransform={'uppercase'}>
          {price.title}
        </Heading>
        {isPro && (
          <Tag ml={'1rem'} colorScheme={'blue'}>
            Most Popular
          </Tag>
        )}
      </Flex>
      <Text fontSize={'0.9rem'}>{price.description}</Text>
      <Flex align={'flex-end'} gap={'0.25rem'} mb={isPro ? '1rem' : 0}>
        <Heading>{price.price}</Heading>
        {!isMax && <Text>/mo</Text>}
      </Flex>
      <Button
        onClick={onModalOpen}
        colorScheme={isMax ? 'gray' : 'green'}
        variant={isMax ? 'outline' : 'solid'}
        w={'100%'}
      >
        {isMax ? 'Contact us' : 'Get started'}
      </Button>

      <Text color={altColor} fontSize={'0.9rem'}>
        {price.cta}
      </Text>
      <List spacing={'0.5rem'}>
        {price.services.map((service) => (
          <ListItem key={service.title}>
            <ListIcon as={Check} color={checkColor} />
            {service.title}
          </ListItem>
        ))}
      </List>
      <Flex flexGrow={1} align={'flex-end'} color={altColor}>
        <Text fontSize={'0.9rem'}>
          Minimum contract length: {price.contractLength}
        </Text>
      </Flex>
    </VStack>
  );
}
