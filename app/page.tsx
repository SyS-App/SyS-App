"use client"

import { BaseHeroComponent } from "@/components/base/hero";
import { getDevYear } from "@/lib/base";

const Page = () => {

    return (
        <div className="flex-1 flex flex-col justify-center items-center py-16 px-8">
            <div className="mx-16 border">
                {/* Hero content */}
                <BaseHeroComponent>
                    <div className="w-[90%] text-left md:text-center">
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
                <div className="h-52">
                    
                </div>
            </div>
        </div>
    )
}

export default Page;