'use client';

// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';

// chakra-ui
import {
  Box,
  Heading,
  Image,
  Text,
  Container,
  Button,
  useColorModeValue,
  OrderedList,
  ListItem,
  List,
  ListIcon,
  VStack,
  AspectRatio,
} from '@chakra-ui/react';
import { BadgeCheck } from 'lucide-react';

// local components
import { services } from '@/app/_lib/contants/services';

export default function ServicePage({ slug }) {
  const service = services[slug];
  const { onModalOpen } = useInquiryModal();

  const color = useColorModeValue('blue.500', 'blue.300');

  const mainColor = useColorModeValue('blue.700', 'blue.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container p={{ base: '3rem 1rem', md: '4rem 3rem' }} maxW={'800px'}>
      <AspectRatio mb={'2rem'} w={'100%'} ratio={16 / 9}>
        <Image
          src={service.image}
          alt={service.title}
          objectFit={'cover'}
          h={'auto'}
          borderRadius={'0.5rem'}
        />
      </AspectRatio>
      <Box>
        <Heading>{service.title}</Heading>
        <Text mt={'1rem'}>{service.description}</Text>
      </Box>
      <Heading size={'md'} mt={'3rem'} mb={'1rem'}>
        Process
      </Heading>
      <OrderedList spacing={'0.5rem'}>
        {service.process.map((step) => (
          <ListItem key={step.title}>
            <Text>
              <span style={{ fontWeight: 600 }}>{step.title}</span>{' '}
              {step.description}
            </Text>
          </ListItem>
        ))}
      </OrderedList>
      <Heading size={'md'} mt={'3rem'} mb={'1rem'}>
        Benefits
      </Heading>
      <List spacing={'0.5rem'}>
        {service.benefits.map((benefit) => (
          <ListItem key={benefit}>
            <ListIcon as={BadgeCheck} color={color} />
            {benefit}
          </ListItem>
        ))}
      </List>
      <VStack
        borderTop={'1px solid'}
        borderColor={borderColor}
        textAlign={'center'}
        align={'center'}
        mt={'3rem'}
        pt={'2rem'}
        gap={'1rem'}
      >
        <Container maxW={'600px'} textAlign={'center'}>
          <Heading size={'lg'} color={mainColor} fontWeight={500} mb={'0.5rem'}>
            {service.cta.title}
          </Heading>
          <Text mb={'1rem'}>{service.cta.description}</Text>
          <Button size={'sm'} colorScheme={'blue'} onClick={onModalOpen}>
            Start your project
          </Button>
        </Container>
      </VStack>
    </Container>
  );
}
