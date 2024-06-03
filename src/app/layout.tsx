import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./util.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { AlertCore } from "./components/Alert";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sysapp.org'),
  title: {
    default: "SyS App",
    template: "%s - SyS App"
  },
  description: "Developed and maintained since age 14.",
  icons: "/logo.svg",
  openGraph: {
    images: [{
      url: "/og.png",
    }],
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div id="recaptcha-container"></div>
          <main className="min-h-screen flex flex-col ">
            <AlertCore />
            <Nav />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
