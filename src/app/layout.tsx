import ThemeRegistry from "@/components/theme-layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import QueryProvider from "./query-provider";
import PreFetchProvider from "./pre-fetch-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <QueryProvider>
          <PreFetchProvider>
            <ThemeRegistry options={{ key: "mui-theme" }}>
              <body className={inter.className}>{children}</body>
            </ThemeRegistry>
          </PreFetchProvider>
        </QueryProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
