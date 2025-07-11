import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD - Licensed Clinical Psychologist | Los Angeles',
  description: 'Dr. Serena Blake is a licensed clinical psychologist in Los Angeles specializing in anxiety, relationship counseling, and trauma recovery. 8 years experience, 500+ sessions. Book your free consultation today.',
  keywords: 'therapist, psychologist, Los Angeles, anxiety, trauma, relationship counseling, mental health, therapy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}