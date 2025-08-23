import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import { siteConfig, organizationStructuredData, servicesStructuredData } from "../lib/metadata";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Ensure correct scaling and breakpoints on mobile and tablets
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/Fonts/Nohemi/Nohemi-Regular-BF6438cc58b98fc.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Nohemi/Nohemi-Bold-BF6438cc5812315.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Nohemi/Nohemi-Medium-BF6438cc581a509.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesStructuredData),
          }}
        />
      </head>
      <body className={styles.body}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
