import type { Metadata } from "next";
import "./globals.css";

const metaTitle = "Ava Martinez | Frontend Engineer";
const metaDescription =
  "Frontend engineer with 3 years of experience building React and Angular interfaces, delivering polished user experiences and scalable design systems.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: "https://agentic-e2af1758.vercel.app",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#0a0f1c] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
