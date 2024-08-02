import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";

// Providers
import { Providers } from "./providers";

// Components
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// Static
import { GA_ID } from "@/common/static/app.static";

// Styles
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StratoVM Daily Badge NFT Claim",
  description: "StratoVM Daily Badge NFT Claim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GoogleAnalytics gaId={GA_ID} />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <ToastContainer theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
