import Page from "../../components/Page";

export const metadata = {
  title: "Our Services - Freight Forwarding, Customs Clearance, Warehousing",
  description:
    "Comprehensive logistics services: freight forwarding (air, sea, road), customs clearance, warehousing & distribution, DG shipment handling and supply chain management.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Our Services - Freight Forwarding, Customs Clearance, Warehousing", url: "/services" },
};

export default function ServicesPage() {
  return <Page name="services" />;
}
