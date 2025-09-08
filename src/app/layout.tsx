import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sample Blog",
  description: "sample blog, full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
