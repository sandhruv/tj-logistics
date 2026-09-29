import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Behaviors from "../components/Behaviors";

export const metadata = {
  metadataBase: new URL("https://tjsealogistics.com"),
  title: {
    default: "TJ Sea Logistics | Leading Logistics Company in India - Freight Forwarding & Customs Clearance",
    template: "%s | TJ Sea Logistics",
  },
  description:
    "TJ Sea Logistics is India's trusted logistics partner offering freight forwarding, customs clearance, warehousing, DG shipment handling, and supply chain solutions across 50+ countries. 3+ years of experience.",
  keywords: [
    "logistics company India",
    "freight forwarding",
    "customs clearance",
    "supply chain management",
    "DG shipment handling",
    "warehousing",
    "TJ Sea Logistics",
    "Ludhiana logistics",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "TJ Sea Logistics | Leading Logistics Company in India",
    description:
      "Freight forwarding, customs clearance, warehousing, and supply chain solutions across 50+ countries.",
    url: "https://tjsealogistics.com",
    siteName: "TJ Sea Logistics",
    images: ["https://tjsealogistics.com/images/hero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TJ Sea Logistics | Logistics Solutions",
    description:
      "Leading logistics company in India offering freight forwarding, customs clearance, and supply chain solutions.",
    images: ["https://tjsealogistics.com/images/hero.jpg"],
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "TJ Sea Logistics",
      url: "https://tjsealogistics.com",
      logo: "https://tjsealogistics.com/favicon.svg",
      foundingDate: "2023",
      description:
        "Leading logistics company in India offering freight forwarding, customs clearance, warehousing, DG shipment handling, and end-to-end supply chain solutions.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#TJ Sea Logistics, Street No. 9, Jiwan Nagar Chowk",
        addressLocality: "Ludhiana",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-628490-0399",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "LocalBusiness",
      name: "TJ Sea Logistics",
      url: "https://tjsealogistics.com",
      telephone: "+91-628490-0399",
      email: "info@jaspreetimpex.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#TJ Sea Logistics, Street No. 9, Jiwan Nagar Chowk",
        addressLocality: "Ludhiana",
        addressRegion: "Punjab",
        postalCode: "141001",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 30.901, longitude: 75.8573 },
      foundingDate: "2023",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "WebSite",
      name: "TJ Sea Logistics",
      url: "https://tjsealogistics.com",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <Behaviors />
      </body>
    </html>
  );
}
