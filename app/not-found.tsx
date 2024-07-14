
import * as React from "react"

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404",
    description: "Page not found.",
    openGraph: {
        description: "Page not found."
    }
}

const E404 = () => {

    return (
        <div className="min-h-[500px] flex flex-col justify-center items-center">
            <div className="border md:p-16 p-8 rounded-md flex flex-col spay4">
                <div className="space-y-2">
                    <h1 className="text-2xl text-center font-bold">
                        Error 404
                    </h1>
                    <p className="text-muted-foreground">Page not found.</p>
                </div>
            </div>
        </div>
    )
}

export default E404;