import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';
import '@/src/style/main.css';
// import NavBar from '@/components/navBar/NavBar';
// import Footer from '@/components/footer/Footer';
import ClientProviders from '@/src/utils/providers/ClientProviders';

export async function generateMetadata() {
  return {
    title: 'Aakdi',
    description: 'Aakdi',
    keywords: 'Aakdi',
    openGraph: {
      title: 'Aakdi',
      description: 'Aakdi',
      url: 'Aakdi-rose.vercel.com',
      siteName: 'Aakdi',
      images: [
        {
          url: 'https://Aakdi-rose.vercel.app/_next/static/media/blue-logo.62b83cbf.svg',
          width: 1200,
          height: 630,
          alt: 'Aakdi',
        },
      ],
      type: 'website',
      locale: 'ar_SA',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning={true}>
        <ClientProviders>
          {/* <NavBar /> */}
          {children}
          {/* <Footer /> */}
        </ClientProviders>
      </body>
    </html>
  );
}
