// images
const images = ['https://i.imgur.com/BFWf7kuh.jpg'];

// local components
import Pricing from './pricing';

// metadata
export const metadata = {
  title: 'Pricing',
  description:
    'Learn about SupaRocket pricing and how we can help you grow your business.',
  openGraph: {
    title: 'Pricing',
    images: images,
    description:
      'Learn about SupaRocket pricing and how we can help you grow your business.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Pricing />;
}
