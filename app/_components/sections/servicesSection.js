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
} from '@chakra-ui/react';
import {
  AppWindowMac,
  Check,
  FlaskConical,
  Globe,
  SwatchBook,
} from 'lucide-react';

export default function ServicesSection() {
  const mainBg = useColorModeValue('gray.100', 'gray.700');
  const secondaryBg = useColorModeValue('blue.100', 'blue.900');
  const iconBg = useColorModeValue('#2F855A', '#68D391');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Container maxW={'1100px'} mb={'5rem'} mt={'5rem'}>
      <Grid
        templateRows={{ base: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)' }}
        gap={4}
      >
        <GridItem
          border={'1px solid'}
          borderColor={borderColor}
          rowSpan={{ base: 1, md: 2 }}
          colSpan={{ base: 1, md: 2 }}
          bg={mainBg}
          borderRadius={'0.5rem'}
          p={'3rem 1rem'}
        >
          <Box mb={'1rem'}>
            <Globe size={29} color={iconBg} />
          </Box>
          <Heading mb={'0.5rem'} size={'md'}>
            Marketing Websites
          </Heading>
          <Text>
            Transform your startup&apos;s online presence with custom-designed
            marketing websites that captivate and convert.
          </Text>
          <List mt={'3rem'}>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              SEO-Optimized
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Responsive Design
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Lead Generation Tools
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Analytics Integration
            </ListItem>
          </List>
        </GridItem>

        <GridItem
          border={'1px solid'}
          borderColor={borderColor}
          p={'3rem 1rem'}
          colSpan={{ base: 1, md: 2 }}
          bg={secondaryBg}
          borderRadius={'0.5rem'}
        >
          <Box mb={'1rem'}>
            <AppWindowMac size={29} color={iconBg} />
          </Box>
          <Heading mb={'0.5rem'} size={'md'}>
            Web Applications
          </Heading>
          <Text>
            Build scalable, high-performance web applications tailored to your
            startup&apos;s unique needs with Next.js and Supabase.
          </Text>
          <List mt={'3rem'}>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Rapid Development
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Scalable Architecture
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Real-Time Features
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Secure Authentication
            </ListItem>
          </List>
        </GridItem>
        <GridItem
          border={'1px solid'}
          borderColor={borderColor}
          p={'3rem 1rem'}
          colSpan={{ base: 1, md: 2 }}
          bg={secondaryBg}
          borderRadius={'0.5rem'}
        >
          <Box mb={'1rem'}>
            <SwatchBook size={29} color={iconBg} />
          </Box>
          <Heading mb={'0.5rem'} size={'md'}>
            Brand Packages
          </Heading>
          <Text>
            Create a strong, cohesive brand identity that resonates with your
            target audience and stands out in the market.
          </Text>
          <List mt={'3rem'}>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Logo Design
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Brand Guidelines
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Marketing Collaterals
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Social Media Kits
            </ListItem>
          </List>
        </GridItem>
        <GridItem
          border={'1px solid'}
          borderColor={borderColor}
          p={'3rem 1rem'}
          colSpan={{ base: 1, md: 4 }}
          bg={mainBg}
          borderRadius={'0.5rem'}
        >
          <Box mb={'1rem'}>
            <FlaskConical size={29} color={iconBg} />
          </Box>
          <Heading mb={'0.5rem'} size={'md'}>
            UX/UI Design
          </Heading>
          <Text>
            Craft compelling user experiences with our UX/UI design services,
            ensuring your product is intuitive, engaging, and aesthetically
            pleasing.
          </Text>
          <List mt={'3rem'}>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              User-Centered Design
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Wireframing and Prototyping
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Interaction Design
            </ListItem>
            <ListItem>
              <ListIcon as={Check} color={iconBg} />
              Accessibility Standards
            </ListItem>
          </List>
        </GridItem>
      </Grid>
    </Container>
  );
}
