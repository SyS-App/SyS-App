"use client"

import { BaseHeroComponent } from "@/components/base/hero";
import { getDevYear } from "@/lib/base";

const Page = () => {

    return (
        <div className="flex-1 flex flex-col justify-center items-center py-[5%] px-[5%]">
            <div className="w-full mx-[5%]">
                {/* Hero content */}
                <BaseHeroComponent>
                    <div className="px-[16%] text-left md:text-center">
                        <h1 className="text-3xl md:text-title font-bold leading-tight">
                            Components, Libraries, Projects
                        </h1>
                        <div className="my-4" />
                        <span className="text-lg md:text-xl text-muted-foreground">
                            Powered by a {getDevYear} Year Old Developer
                        </span>
                    </div>
                </BaseHeroComponent>
                <br />
                {/* Main content */}
                <div className="h-52 border flex flex-col">
                    {/* Image */}
                    <div className="border-b h-10">

                    </div>
                    {/* Slogan */}
                    <div className="border-b p-8">
                        <div>
                            <p className="text-2xl font-bold text-center">
                                Find everything you need
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;