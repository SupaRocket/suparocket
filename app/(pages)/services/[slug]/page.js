// images
const images = [
  'https://images.unsplash.com/photo-1500190116668-ab5b05a22c65?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

// local components
import ServicePage from './servicePage';

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

export default function Page({ params }) {
  const slug = params.slug;

  return <ServicePage slug={slug} />;
}
