import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";
import { Footer } from "./components/footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivolbene Dev",
  description: "Meu portfolio e site pessoal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth antialiased">
      <body className={`${quicksand.className} overflow-x-hidden bg-[#000914]`}>
        <StarsCanvas />
        {children}
        <div className="pt-14">
          <Footer />
        </div>
      </body>
    </html>
  );
}
