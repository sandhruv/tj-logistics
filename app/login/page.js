import Page from "../../components/Page";

export const metadata = {
  title: "Login",
  description: "Login to your TJ Sea Logistics account.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return <Page name="login" />;
}
