// images
const images = [
  'https://images.unsplash.com/photo-1457794355224-e92bb76cec4c?q=80&w=1525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

// local components
import Pricing from './pricing';

// metadata
export const metadata = {
  title: 'Pricing',
  description:
    'Learn about Thought Co pricing and how we can help you grow your business.',
  openGraph: {
    title: 'Pricing',
    images: images,
    description:
      'Learn about Thought Co pricing and how we can help you grow your business.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Pricing />;
}
