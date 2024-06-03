"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter();

    const reload = () => {
        router.refresh();
    };

    return (
        <div className='flex justify-center items-center absolute top-0 left-0 w-full h-full'>
            <div>
                <h1 className='text-3xl mb-4'>Page not found.</h1>
                <div className='grid gap-2 md:grid-cols-2'>
                    <Link href="/" className={buttonVariants({ variant: "secondary" })}>Home</Link>
                    <Button variant="outline" onClick={reload}>Reload</Button>
                </div>
            </div>
        </div>
    )
}