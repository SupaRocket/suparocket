// images
const images = ['https://i.imgur.com/BFWf7kuh.jpg'];

// local components
import Services from './services';

// metadata
export const metadata = {
  title: 'Services',
  description:
    'Learn SupaRocket services and how we can help you grow your business.',
  openGraph: {
    title: 'Services',
    images: images,
    description:
      'Learn SupaRocket services and how we can help you grow your business.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Services />;
}
