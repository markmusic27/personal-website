import "~/styles/globals.css";

import { type Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Mark Music",
  description: "Personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${crimsonText.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
