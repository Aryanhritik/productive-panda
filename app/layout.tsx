import type { Metadata } from "next";
import { Inter , Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  variable:"--font-poppins",
  weight: ["200","400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Productive Panda",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
