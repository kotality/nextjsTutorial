import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Tailwind antialiased to smooth out font */}
      {/* by applying Inter to body, font will be applied throughout the app */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
