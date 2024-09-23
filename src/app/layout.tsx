import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const haskoy = localFont({
  src: "./fonts/Haskoy-variable.woff2",
  variable: "--font-haskoy",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Finbiz",
  description: "Finbiz Financial Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${haskoy.variable} antialiased`}>{children}</body>
    </html>
  );
}
