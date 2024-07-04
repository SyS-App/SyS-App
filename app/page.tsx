"use client"

import { BaseHeroComponent } from "@/components/base/hero";
import { getDevYear } from "@/lib/base";

const Page = () => {

    return (
        <div className="flex-1 flex flex-col justify-center items-center md:py-16 md:px-16">
            <div className="w-full md:mx-16">
                {/* Hero content */}
                <BaseHeroComponent>
                    <div className="w-[80%] text-left md:text-center">
                        <h1 className="text-3xl md:text-title font-bold leading-tight">
                            Open Source Components, Libraries, Projects
                        </h1>
                        <div className="my-4" />
                        <span className="text-lg md:text-xl text-muted-foreground">
                            Powered by a {getDevYear} Year Old Developer
                        </span>
                    </div>
                </BaseHeroComponent>
                <br />
                {/* Main content */}
                <div className="h-52 border">
                    
                </div>
            </div>
        </div>
    )
}

export default Page;