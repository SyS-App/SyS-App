// Docs page
import { BaseErrorComponent, BaseErrorComponentContent, BaseErrorComponentDescription, BaseErrorComponentTitle } from "@/components/base/errors";
import { TakeMeHomeButton } from "@/components/buttons";
import { Metadata } from "next";


const metadata: Metadata = {
    title: "Docs",
    description: "Find SyS App documentation here."
}


const Page = () => {

    return (
        <BaseErrorComponent>
            <BaseErrorComponentTitle>
                Documentation
            </BaseErrorComponentTitle>
            <BaseErrorComponentDescription>
                This page is temporary unavailable. Sorry for the inconvenience.
            </BaseErrorComponentDescription>
            <BaseErrorComponentContent>
                <TakeMeHomeButton />
            </BaseErrorComponentContent>
        </BaseErrorComponent>
    )
}


export { metadata };
export default Page;