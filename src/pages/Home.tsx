import {NavButton} from "../components/NavButton";
import React from "react";
import {PageTitle} from "../components/PageTitle";

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
        <main  className="h-screen">
            <header className='bg-blue-light w-full flex flex-row justify-center'>

                <PageTitle pageButtonFlow={homePageHeader} firstButton={false}/>
            </header>
        </main>
    )
}