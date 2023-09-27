import React, {useEffect, useState} from "react";
import {PageTitle} from "../components/PageTitle";
import {HomeCard} from "../components/HomeCard";
import {HamburgerMenuSmallScreen} from "../components/HamburgerMenuSmallScreen";
import {FooterLinkContent} from "../components/FooterLinkContent";

export const Home = () => {
    const [showSideNavBar, setShowSideNavBar] = useState(window.innerWidth > 650);


    useEffect(() => {
        componentToDisplay();
        window.addEventListener('resize', componentToDisplay);
        return () => {
            window.removeEventListener('resize', componentToDisplay)
        }
    });

    const componentToDisplay = () => {
        let width = window.innerWidth;
        if (width < 650) {
            setShowSideNavBar(false)
        } else {
            return setShowSideNavBar(true);
        }
    };

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
                <PageTitle pageButtonFlow={homePageHeader} widthForBigScreen={"2xl:w-6/12"}/>
                <HamburgerMenuSmallScreen showSideNavBar={showSideNavBar}/>
            </header>
            <section className="m-auto pb-8 md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center sm:justify-items-start">
                <HomeCard title={"Quality"} text={"Understanding the Essence of Quality"} link={"/quality"}/>
                <HomeCard title={"Exploratory Testing"} text={"Unveiling Exploratory Testing and Its Impact on Application Quality"} link={"/exploratoryTesting"}/>
                <HomeCard title={"Interaction"} text={"Transforming Your Interaction Approach for Enhanced Exploratory Testing"} link={"/interactions"}/>
                <HomeCard title={"Objects"} text={"Uncovering Objects in Your Application for Effective Exploratory Testing"} link={"/objects"}/>
                <HomeCard title={"States"} text={"Navigating Through Application States: A Key Aspect of Exploratory Testing"} link={"/states"}/>
                <HomeCard title={"Environment"} text={"Grasping the Impact of the Application Environment on Exploratory Testing"} link={"/environment"}/>
                <HomeCard title={"Summary"} text={"The Invaluable Role of Exploratory Testing in Elevating Application Quality"} link={"/summary"}/>
            </section>
            <footer className="bg-blue-light w-full flex flex-row justify-center">
                <section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12">
                    <FooterLinkContent/>
                </section>
            </footer>
        </main>
    )
}