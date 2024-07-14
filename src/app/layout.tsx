import type { Metadata } from "next";
import "../css/globals.css";


export const metadata: Metadata = {
  title: "Countries API",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html >
  );
}
