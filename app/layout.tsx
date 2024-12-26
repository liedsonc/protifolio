import './globals.css';
import Navbar from '../components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Liedson Correia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row px-10 py-5 md:px-20 md:py-10 h-screen w-screen justify-between font-sans bg-light-background  dark:bg-dark-background text-light-primary dark:text-dark-primary transition-colors">
        {/* Navigation Bar */}
        <Navbar />
        <MobileNavbar />


        {/* Page Content */}
        <main className='flex-1'>{children}</main>
      </body>
    </html>
  );
}