// SEO metadata configuration for RasmTeam
export const siteConfig = {
  name: "RasmTeam | رسم تیم - Creative Design & Development Agency",
  description: "RasmTeam (رسم تیم) is a leading creative agency specializing in branding, digital design, software development, and media production. We bring innovative solutions to life.",
  url: "https://rasmteam.com",
  siteName: "RasmTeam",
  creator: "RasmTeam",
  keywords: [
    "RasmTeam",
    "رسم تیم",
    "creative agency",
    "branding",
    "digital design",
    "software development",
    "media production",
    "web design",
    "graphic design",
    "UI/UX design",
    "Iran design agency",
    "Persian design team"
  ],
  authors: [
    {
      name: "RasmTeam",
      url: "https://rasmteam.com",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fa_IR",
    url: "https://rasmteam.com",
    siteName: "RasmTeam | رسم تیم",
    title: "RasmTeam | رسم تیم - Creative Design & Development Agency",
    description: "Leading creative agency specializing in branding, digital design, software development, and media production. Innovative solutions by RasmTeam (رسم تیم).",
    images: [
      {
        url: "/RasmHeaderLogo.webp",
        width: 1200,
        height: 630,
        alt: "RasmTeam - Creative Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RasmTeam | رسم تیم - Creative Design & Development Agency",
    description: "Leading creative agency specializing in branding, digital design, software development, and media production.",
    images: ["/RasmHeaderLogo.webp"],
    creator: "@rasmteam",
  },
  verification: {
    google: "b4153196378e7c98",
  },
};

// Generate metadata for specific pages
export function generatePageMetadata({
  title,
  description,
  path = "",
  images,
  keywords = [],
}) {
  const fullTitle = title ? `${title} | RasmTeam | رسم تیم` : siteConfig.name;
  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  
  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [...siteConfig.keywords, ...keywords].join(", "),
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...siteConfig.openGraph,
      title: fullTitle,
      description: fullDescription,
      url,
      images: images || siteConfig.openGraph.images,
    },
    twitter: {
      ...siteConfig.twitter,
      title: fullTitle,
      description: fullDescription,
      images: images || siteConfig.twitter.images,
    },
    verification: siteConfig.verification,
  };
}

// Structured data for organization
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RasmTeam",
  "alternateName": "رسم تیم",
  "url": "https://rasmteam.com",
  "logo": "https://rasmteam.com/RasmHeaderLogo.webp",
  "description": "Leading creative agency specializing in branding, digital design, software development, and media production.",
  "foundingDate": "2020",
  "sameAs": [
    "https://instagram.com/rasmteam",
    "https://linkedin.com/company/rasmteam"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Persian"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IR"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Worldwide"
  }
};

// Services structured data
export const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "RasmTeam"
  },
  "serviceType": [
    "Branding Services",
    "Digital Design", 
    "Software Development",
    "Media Production",
    "Web Design",
    "UI/UX Design",
    "Graphic Design"
  ],
  "areaServed": "Worldwide",
  "availableLanguage": ["English", "Persian"]
};
