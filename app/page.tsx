// Home page
import { Terminal } from "lucide-react";
import { BaseHeroComponent } from "@/components/base/hero";
import { getDevYear } from "@/lib/base";
import { BasePage } from "@/components/base/base";

const Page = () => {

    return (
        <BasePage styles="flex-1 py-0 md:py-[2.5%] flex flex-col justify-center items-center">
            <div className="flex flex-col w-full md:w-[95%] relative">
                {/* Hero content */}
                <BaseHeroComponent>
                    <div className="px-[16%] text-left md:text-center">
                        <h1 className="text-3xl md:text-title font-bold leading-tight ">
                            Components, Libraries, Projects
                        </h1>
                        <div className="my-4" />
                        <span className="text-lg md:text-xl text-muted-foreground">
                            Powered by a {getDevYear} Year Old Developer
                        </span>
                    </div>
                </BaseHeroComponent>
                {/* Main content */}
                <div className="border flex flex-col">
                    {/* Slogan */}
                    <div className="border-b p-8">
                        <div className="flex items-center justify-center space-x-2">
                            <p className="text-2xl font-semibold">
                                Find everything you need
                            </p>
                            <Terminal className="hidden md:block" />
                        </div>
                    </div>
                </div>
            </div>
        </BasePage>
    )
}

export default Page;