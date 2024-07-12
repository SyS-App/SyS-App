// Home page
import "@/css/page.css";
import { Terminal } from "lucide-react";
import { getDevYear } from "@/lib/base";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Announcement } from "@/components/announcement";

const Page = () => (
    <div className="container relative">
        <PageHeader>
            <Announcement />
            <PageHeaderHeading>Components, Libraries, Softwares and more</PageHeaderHeading>
            <PageHeaderDescription>
                Powered by a {getDevYear} Year Old Developer. Just created for passion.
            </PageHeaderDescription>
            <PageActions>
                <Button asChild size="sm">
                    <Link href="/docs">Explore now</Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/SyS-App/"
                    >
                        GitHub
                    </Link>
                </Button>
            </PageActions>
        </PageHeader>
        <div className="flex justify-center items-center space-x-2">
            <h1 className="text-xl font-bold">
                Find everything you need
            </h1>
            <Terminal />
        </div>
        <div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
)

export default Page;