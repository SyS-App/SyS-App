import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./util.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
          <main className="min-h-screen flex flex-col ">
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
