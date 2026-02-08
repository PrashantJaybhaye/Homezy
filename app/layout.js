import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Homezy - Find & Book Home Services Near You",
  description: "Discover trusted professionals for home services & repairs. Book electricians, plumbers, cleaners, and more with Homezy - your one-stop solution for all home service needs.",
  keywords: "home services, repair services, electrician, plumber, cleaning, maintenance, home repair",
  authors: [{ name: "Homezy" }],
  openGraph: {
    title: "Homezy - Find & Book Home Services Near You",
    description: "Discover trusted professionals for home services & repairs near you.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header />
          <div className="mx-6 md:mx-16">
            <Toaster />
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
