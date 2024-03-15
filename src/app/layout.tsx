import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Page title",
  description: "Page description.",
  icons: [
    {
      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
