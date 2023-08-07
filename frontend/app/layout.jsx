import "../styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enrico Findley",
  description: "Enrico Findley's Portfolio Website",
  generator: "Next.js",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Software Engineer", "Enrico Findley", "Enrico", "Findley", "Portfolio", "Projects", "Data Scientist"],
  authors: [{ name: "Enrico Findley" }],
  colorScheme: "dark",
  themeColor: "#171212",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  google: "notranslate",
  language: "English",
  lang: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
