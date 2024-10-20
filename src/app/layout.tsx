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

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/sidebar/app-sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Providers>
            <ScreenSize />
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger className="fixed z-[1000000000]" />
              <main>{children}</main>
            </SidebarProvider>
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
