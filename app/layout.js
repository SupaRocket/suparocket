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

const APP_NAME = 'SupaRocket';
const APP_DEFAULT_TITLE = 'SupaRocket – Catalyst for Startups';
const APP_TITLE_TEMPLATE = '%s – SupaRocket';
const APP_DESCRIPTION =
  "SupaRocket accelerates SaaS startups' journey to success by crafting bespoke marketing websites, web applications, and brand packages with precision and creativity.";

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
    images: ['https://i.imgur.com/CljkHnsh.jpg'],
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
