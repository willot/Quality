import React from "react";
import {PageTitle} from "../components/PageTitle";
import {HomeCard} from "../components/HomeCard";

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
            <section className="m-auto md:w-10/12 lg:w-9/12 xl:w7/12 2xl:w-6/12 grid grid-cols-3 justify-items-center">
                <HomeCard title={"Quality"} text={"This section is a refresher on what quality is"} link={"/quality"}/>
                <HomeCard title={"Exploratory Testing"} text={"An introduction of what exploratory testing is and the benefits for your application quality."} link={"/exploratoryTesting"}/>
                <HomeCard title={"Interaction"} text={"This is the first technique to learn to build your exploratory testing focus on changing the way you interact with your application."} link={"/interactions"}/>
                <HomeCard title={"Objects"} text={"This is the second exploratory testing technique focus on understand how to identify the objects in your application and test them."} link={"/objects"}/>
                <HomeCard title={"States"} text={"This is the third exploratory testing technique focus on identifying the states in your application."} link={"/states"}/>
                <HomeCard title={"Environment"} text={"This is the last exploratory testing technique focus on understanding how the environment of your application affect the experience of the users."} link={"/environment"}/>
                <HomeCard title={"Summary"} text={"Why exploratory testing is a very valuable technique to add to your tool box to improve the quality of your application."} link={"/summary"}/>
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