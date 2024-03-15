'use client';

// chakra-ui
import { Box } from '@chakra-ui/react';

// local components
import ServicesSection from './_components/sections/servicesSection';
import HeroSection from './_components/sections/heroSection';
import LogoSection from './_components/sections/logoSection';
import CtaSection from './_components/sections/ctaSection';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <LogoSection />
      <ServicesSection />
      <CtaSection />
    </Box>
  );
}
