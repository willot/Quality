import React from "react";
import {FooterLinkContent} from "../components/FooterLinkContent";
import {NavButton} from "../components/NavButton";

export const NoPage = () => {
    return (
        <>
            <header className='bg-blue-light w-full flex flex-row justify-center'>
                <section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12">
                    <h1 className="text-4xl text-left font-medium pb-5 text-pink">Good try! but this page doesn't
                        exist</h1>
                    <p className="pb-8">Choose the section where you want to go?</p>
                </section>
            </header>
            <section className="bg-white-bg flex flex-column justify-center w-full">
                <section
                    className="bg-white-bg text-black text-justify py-10 px-5 w-full md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12">
                    <section className="flex flex-col space-y-10">
                        <NavButton text={"Home"} linkUrl={"/"}/>
                        <NavButton text={"Quality"} linkUrl={"/quality"}/>
                        <NavButton text={"Exploratory Testing"} linkUrl={"/exploratoryTesting"}/>
                        <div>
                            <p className="px-4">If you came here from my '/blabla' link example than click on the
                                'Interaction' link to go back where you
                                were.</p>
                            <NavButton text={"Interactions"} linkUrl={"/interactions"}/>
                        </div>
                        <NavButton text={"Dealing with Objects"} linkUrl={"/objects"}/>
                        <NavButton text={"Dealing with states"} linkUrl={"/states"}/>
                        <NavButton text={"Application in its environment"} linkUrl={"/environment"}/>
                        <NavButton text={"Summary"} linkUrl={"/summary"}/>
                    </section>
                </section>
            </section>
            <footer className="bg-blue-light w-full flex flex-row justify-center">
                <section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12">
                    <FooterLinkContent/>
                </section>
            </footer>
        </>
    )
}