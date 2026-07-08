import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://kaneimpex.com"),
  title: {
    default: "Kaneimpex — Custom Uniform & Sportswear Manufacturer",
    template: "%s | Kaneimpex",
  },
  description:
    "Kaneimpex is a B2B manufacturer and supplier of custom sportswear, medical, hospitality, corporate, school and tactical uniforms. Premium quality, worldwide delivery.",
  keywords: [
    "custom uniforms",
    "sportswear manufacturer",
    "medical scrubs supplier",
    "hospitality uniforms",
    "B2B apparel manufacturer",
  ],
  openGraph: {
    title: "Kaneimpex — Custom Uniform & Sportswear Manufacturer",
    description:
      "B2B manufacturer of custom sportswear and uniforms for every industry.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
