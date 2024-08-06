// images
const images = [
  'https://images.unsplash.com/photo-1489479850057-1f2c1921964c?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

// local components
import Services from './services';

// metadata
export const metadata = {
  title: 'Services',
  description:
    'Learn Thought Co services and how we can help you grow your business.',
  openGraph: {
    title: 'Services',
    images: images,
    description:
      'Learn Thought Co services and how we can help you grow your business.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Services />;
}
