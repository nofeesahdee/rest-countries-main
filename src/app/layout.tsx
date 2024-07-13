import type { Metadata } from "next";
import "../css/globals.css";
import { Nunito_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "Countries API",
  description: "",
};

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}> {children}</body>
    </html >
  );
}
