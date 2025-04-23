import './globals.css';

export const metadata = {
  title: 'Nawara Labs',
  description: 'Landing Pages & Automations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', background: '#f8f8f8', color: '#111' }}>
        {children}
      </body>
    </html>
  );
}
