
import * as React from "react"

import { Metadata } from "next";
import { TakeMeHomeButton } from "@/components/buttons";
import { BaseErrorComponent, BaseErrorComponentContent, BaseErrorComponentDescription, BaseErrorComponentTitle } from "@/components/base/errors";

export const metadata: Metadata = {
    title: "404",
    description: "Page not found.",
    openGraph: {
        description: "Page not found."
    }
}

function E404() {

    return (
        <BaseErrorComponent>
            <BaseErrorComponentTitle>
                404
            </BaseErrorComponentTitle>
            <BaseErrorComponentDescription>
                Page not found.
            </BaseErrorComponentDescription>
            <BaseErrorComponentContent>
                <TakeMeHomeButton />
            </BaseErrorComponentContent>
        </BaseErrorComponent>
    )
}

export default E404;