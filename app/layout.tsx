import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Liedson Correia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex font-sans bg-light-background dark:bg-dark-background text-light-primary dark:text-dark-primary transition-colors">
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}