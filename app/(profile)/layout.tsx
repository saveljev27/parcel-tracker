import type { Metadata } from 'next';
import '../globals.css';
import Sidebar from '@/components/Profile/Sidebar';
import { Footer, Header, Wrapper } from '@/components';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="w-full px-6 py-3">
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
