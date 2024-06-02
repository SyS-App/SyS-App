"use client"

import Image from "next/image"
import React from "react";


const HeroSection = () => {


    return (
        <section className="m-8 grid gap-2 md:grid-cols-2">
            <div className="p-4 flex justify-center items-center">
                <div className="p-4 md:text-start text-center">
                    <h1 className="text-7xl font-bold">SyS App</h1>
                    <br />
                    <h2 className="text-2xl">Developed and maintained since <strong>age 14</strong>.</h2>
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


export default function HomePageContent() {

    return (
        <>
            <HeroSection />
        </>
    )
}