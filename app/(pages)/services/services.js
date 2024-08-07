'use client';

// images
const marketingWebsitesSrc =
  'https://images.unsplash.com/photo-1591826855906-74fad3654cee?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const webApplicationsSrc =
  'https://images.unsplash.com/photo-1524311583145-d5593bd3502a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const brandPackagesSrc =
  'https://images.unsplash.com/photo-1706186101257-818a4bbfd8bb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const uxDesignSrc =
  'https://images.unsplash.com/photo-1625940092250-d12a9cff3fbd?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// hooks
import { useInquiryModal } from '@/app/_lib/hooks/useInquiryModal';

// chakra-ui
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Tag,
  Link,
  Container,
  Button,
  Highlight,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoveRight } from 'lucide-react';

// local components
import ImageTextSection from '@/app/_components/sections/imageTextSection';

export default function Services() {
  const { onModalOpen } = useInquiryModal();

  const color = useColorModeValue('purple.500', 'purple.300');

  const mainColor = useColorModeValue('blue.700', 'blue.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box p={{ base: '3rem 0', md: '6rem 3rem' }} fontSize={'1.1rem'}>
      <Container
        maxW={'650px'}
        mb={'4rem'}
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
          <Heading size={'lg'}>Speed, precision, and innovation</Heading>
          <Heading mb={'1rem'} size={'3xl'} color={color}>
            Our services
          </Heading>

          <Text mb={'2rem'}>
            At Thought Co, we specialize in catapulting SaaS startups to success
            with a comprehensive suite of services designed to build, brand, and
            boost your online presence. From initial concept to final launch,
            we&aos;re here to support your journey. Explore our services to see
            how we can help your startup take off.
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
      <Stack>
        <Box borderTop={'1px solid'} borderColor={borderColor} pt={'2rem'}>
          <ImageTextSection
            imageSrc={marketingWebsitesSrc}
            title={'Marketing Websites'}
            reversed
            description={
              "Launch your online presence with a custom-designed marketing website that speaks directly to your target audience. Our SEO-optimized, responsive websites are crafted to convert visitors into customers and amplify your brand's message."
            }
            href={'/services/marketing-websites'}
          />
        </Box>
        <ImageTextSection
          imageSrc={webApplicationsSrc}
          title={'Web Applications'}
          description={
            'Transform your innovative ideas into reality with our custom web applications. Leveraging Next.js and Supabase, we deliver scalable, secure, and user-friendly applications designed to support your business as it grows.'
          }
          href={'/services/web-applications'}
        />
        <ImageTextSection
          reversed
          imageSrc={brandPackagesSrc}
          title={'Brand Packages'}
          description={
            'Establish a strong, cohesive brand identity with our comprehensive branding packages. From logo design to brand guidelines, we ensure your startup stands out in the crowded market space.'
          }
          href={'/services/brand-packages'}
        />
        <ImageTextSection
          imageSrc={uxDesignSrc}
          title={'UX Design'}
          description={
            'Elevate the user experience of your web application or website with our UX Design services. Focused on research, wireframing, and UI design, we ensure your product is intuitive, engaging, and aesthetically pleasing.'
          }
          href={'/services/ux-design'}
        />
      </Stack>
      <Container
        maxW={'750px'}
        mb={'5rem'}
        mt={'5rem'}
        pt={'5rem'}
        textAlign={'center'}
      >
        <Heading mb={'1rem'} size={'lg'} color={mainColor} fontWeight={500}>
          Ready to Launch?
        </Heading>
        <Text mb={'3rem'}>
          Your startup&apos;s success starts here. Whether you&apos;re looking
          to build, brand, or boost your digital presence, Thought Co has the
          expertise to help you achieve your goals. [Get in touch] with us today
          to start your project!
        </Text>
        <Button size={'sm'} colorScheme={'blue'} onClick={onModalOpen}>
          Start your project
        </Button>
      </Container>
    </Box>
  );
}
