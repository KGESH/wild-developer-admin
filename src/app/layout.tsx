import './globals.css';
export const metadata = {
  title: 'Wild Developer Admin',
  description: 'Wild Developer Admin page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
