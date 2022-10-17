import React from "react";
import {PageTitle} from "../components/PageTitle";
import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {flushSync} from "react-dom";

export const Home = () => {

    const homePageHeader = {
        button1: {
            text: "",
            link: "",
        },
        button2: {
            text: "Let's get Started",
            link: "/quality"
        },
        title: "Use Exploratory Testing to improve the quality of your product!",
        subTitle: "Explore the different techniques to truly explore your application and improve the quality in your project.",
    }


    return (
        <main className="h-screen">
            <header className='bg-blue-light w-full flex flex-row justify-center'>
                <PageTitle pageButtonFlow={homePageHeader} firstButton={false}/>
            </header>
            <section>
                <button className="border border-blue rounded-md">
                    <section className="p-2">
                        <h2>Quality</h2>
                        <p>This section is a refresh on what is quality</p>
                    </section>
                    <div className="border border-t border-t-blue">
                        Read more
                    </div>
                </button>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>
                <p>CARDS!</p>

            </section>
            <footer className="bg-blue-light w-full flex flex-row justify-center">
                <section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w7/12 2xl:w-5/12">
                    <p className="font-bold">Learning more about exploratory testing</p>
                    <a className="text-blue underline underline-offset-2" href="https://www.linkedin.com/in/willot"
                       rel="noopener noreferrer" target="_blank">by: Vianney Willot</a>
                    <p>Senior Software Engineer at <a href="https://www.thisisartium.com/"
                                                      className="text-pink underline underline-offset-2">Artium</a></p>
                </section>
            </footer>
        </main>
    )
}