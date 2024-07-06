// Dashboard page

import { BaseErrorComponent, BaseErrorComponentContent, BaseErrorComponentDescription, BaseErrorComponentTitle } from "@/components/base/errors";
import { SignInButton } from "@/components/buttons";
import { auth } from "@/config/auth";

const Page = async () => {
    const session = await auth();

    if (!session) {
        return (
            <BaseErrorComponent>
                <BaseErrorComponentTitle>
                    Dashboard
                </BaseErrorComponentTitle>
                <BaseErrorComponentDescription>
                    You cannot access this page.
                </BaseErrorComponentDescription>
                <BaseErrorComponentContent>
                    <SignInButton />
                </BaseErrorComponentContent>
            </BaseErrorComponent>
        )
    }

    return (
        <>
            Hi {session.user?.name}
        </>
    )
}

export default Page;