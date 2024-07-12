// CSS
import { ThemeProvider } from "@/components/theme-provider";
import "@/css/globals.css";

// Import (External)
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

// Import (Internal)
import { MetaConfig } from "@/config/site";

// Fonts
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

const metadata: Metadata = {
    title: {
        default: MetaConfig.title,
        template: `%s | ${MetaConfig.title}`
    },
    description: MetaConfig.description,
    icons: [
        "/logo.svg",
        "/logo.png"
    ],
    keywords: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Open source",
        "Components",
        "Libraries",
        "Projects"
    ],
    authors: [
        {
            name: "Runkang Chen",
            url: "https://github.com/Runkang10"
        }
    ],
    creator: "Runkang Chen",
    openGraph: {
        type: "website",
        url: "https://sysapp.org",
        title: {
            default: MetaConfig.title,
            template: `%s | ${MetaConfig.title}`
        },
        description: MetaConfig.description,
        siteName: MetaConfig.title,
        images: [
            {
                url: "https://sysapp.org/og.png"
            }
        ]
    }
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${roboto.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {/* <div className="flex flex-col min-w-screen min-h-screen">
                            <NavBar />
                            <main className="flex flex-col flex-1">
                                {children}
                            </main>
                            <Footer />
                        </div> */}
                    <div className="flex flex-col min-h-screen bg-background">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

export { metadata };
export default RootLayout;