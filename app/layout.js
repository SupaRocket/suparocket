import '@/app/globals.css';

// next
import { cookies } from 'next/headers';

// providers
import { ThemeProvider } from './_lib/context/ThemeProvider';
import { RecoilRootProvider } from './_lib/context/RecoilRoot';

// local components
import Footer from './_navigation/footer';
import Navbar from './_navigation/navbar';
import ProjectInquiry from './_components/forms/projectInquiry';

const APP_NAME = 'Thought Co';
const APP_DEFAULT_TITLE = 'Thought Co – Catalyst for Startups';
const APP_TITLE_TEMPLATE = '%s – Thought Co';
const APP_DESCRIPTION =
  "Thought Co accelerates SaaS startups' journey to success by crafting bespoke marketing websites, web applications, and brand packages with precision and creativity.";

// metadata
export const metadata = {
  metadataBase: new URL('https://suparocket.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  formatDetection: {
    telephone: false,
  },
  category: 'Marketing',
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      'https://images.unsplash.com/photo-1508247687564-2289326346a2?q=80&w=1660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  return (
    <html lang='en'>
      <body>
        <RecoilRootProvider>
          <ThemeProvider cookies={cookieStore}>
            <Navbar />
            {children}
            <Footer />
            <ProjectInquiry />
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
