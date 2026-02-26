import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recovery Insights Blog",
  description: "Evidence-based guidance for pain relief, mobility, and building a body that moves well. Expert articles on back pain, sciatica, shoulder recovery, and more.",
  keywords: ["physical therapy blog", "rehab exercises", "back pain articles", "sciatica relief", "shoulder pain guide", "mobility tips", "posture advice"],
  openGraph: {
    title: "Recovery Insights Blog | Foundational Rehab",
    description: "Evidence-based guidance for pain relief, mobility, and building a body that moves well.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
