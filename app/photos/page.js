import Page from "../../components/Page";

export const metadata = {
  title: "Photo Gallery - Operations & Facilities",
  description:
    "Photo gallery of TJ Sea Logistics operations - container terminals, warehouses, cargo aircraft, container ships, customs documentation and truck fleet.",
  alternates: { canonical: "/photos" },
  openGraph: { title: "Photo Gallery - Operations & Facilities", url: "/photos" },
};

export default function PhotosPage() {
  return <Page name="photos" />;
}
