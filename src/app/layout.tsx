import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "@/providers";
import { ScreenSize } from "@/components/screen-size";

export const metadata: Metadata = {
  title: "Learnin Framer",
  description: "Tryin' to learn framer-motion",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Providers>
            <main className="flex h-screen w-full">
              <ScreenSize />
              {children}
            </main>
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
