// CSS
import { ThemeProvider } from "@/components/theme-provider";
import "@/css/globals.css";

// Import (External)
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

// Import (Internal)
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import AlertCore from "@/components/alert";
import { MetaConfig } from "@/config/site";
import SessionProvider from "@/components/auth/session";

// Fonts
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

// Config
const GetMetaConfig = MetaConfig();

export const metadata: Metadata = {
  title: {
    default: GetMetaConfig.title,
    template: `%s | ${GetMetaConfig.title}`
  },
  icons: {
    icon: "/logo.svg"
  },
  description: GetMetaConfig.description,
  openGraph: {
    type: "website",
    url: "https://sysapp.org",
    title: {
      default: GetMetaConfig.title,
      template: `%s | ${GetMetaConfig.title}`
    },
    description: GetMetaConfig.description,
    siteName: GetMetaConfig.title,
    images: [
      {
        url: "https://sysapp.org/og.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(roboto.className)}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
          >
            <main className="flex flex-col min-w-screen min-h-screen">
              <AlertCore />
              <NavBar />
              <div className="flex flex-col flex-1">
                {children}
              </div>
              <Footer />
            </main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
