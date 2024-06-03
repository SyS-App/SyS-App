"use client"

import Image from "next/image"
import React from "react";


const HeroSection = () => {


    return (
        <section className="m-8 grid gap-2 md:grid-cols-2">
            <div className="p-4 flex justify-center items-center">
                <div className="p-4 md:text-start text-center">
                    <span className="text-7xl font-bold">SyS App</span>
                    <br /><br />
                    <span className="text-2xl">Developed and maintained since <strong>age 14</strong>.</span>
                </div>
            </div>
            <div className="md:block hidden">
                <div className="flex justify-center items-center p-8">
                    <Image src="/logo.svg" alt="Hero logo." width={400} height={400} />
                </div>
            </div>

        </section>
    )
}

const HomePageContent = () => {

    return (
        <>
            {/* <section className="m-8 grid gap-2 md:grid-cols-2 py-4">
                <div className="p-4 bg-black">
                    
                </div>
                <div className="p-4 bg-black">

                </div>
            </section> */}
        </>
    )
}


export default function HomePage() {

    return (
        <>
            <HeroSection />
            <HomePageContent />
        </>
    )
}