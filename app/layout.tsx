import './global.scss';
import Image from 'next/image';

export const metadata = {
  title: { default: 'UpLeveled - Stripe', template: '%s | UpLeveled Stripe' },
  icons: {
    shortcut: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Image
            src="/images/logo.svg"
            alt="UpLeveled"
            width={476}
            height={155}
          />
        </header>
        {children}
      </body>
    </html>
  );
}