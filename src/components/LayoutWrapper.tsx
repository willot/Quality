import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {OutsideClickDetector} from "../hooks/OutsideClickDetector";
import {NavButton} from "./NavButton";

type LayoutWrapperProps = {
    section: string;
    children: React.ReactElement;
    navigationTextButton: string,
    navigationButtonLinkUrl: string,
}

export const LayoutWrapper = ({
                                  section,
                                  children,
                                  navigationTextButton,
                                  navigationButtonLinkUrl
                              }: LayoutWrapperProps) => {
    const [showSideNavBar, setShowSideNavBar] = useState(window.innerWidth > 650);
    const {ref, isVisible, setIsVisible} = OutsideClickDetector(false);

    useEffect(() => {
        componentToDisplay();
        window.addEventListener('resize', componentToDisplay);
        return () => {
            window.removeEventListener('resize', componentToDisplay)
        }
    })

    const navLinkStyle = (navData: any) => {
        return navData.isActive ? "text-blue font-semibold text-left" : "text-pink font-semibold text-left"
    }

    const sectionsIntro = (sectionName: string) => {
        switch (sectionName) {
            case "quality": {
                return (<section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
                    <h1 className="text-4xl font-medium pb-5 text-pink">What is quality?</h1>
                    <p className="pb-8">Let's start by refreshing what quality means.</p>
                    <NavButton text="Exploratory Testing" linkUrl="/exploratoryTesting"/>
                </section>)
            }
            case "exploratoryTesting" : {
                return (<section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
                    <h1 className="text-4xl text-left font-medium pb-5 text-pink">Exploratory testing </h1>
                    <p className="pb-8">Introduction to exploratory testing.</p>
                    <section className="flex flex-row items-center space-x-4">
                        <NavButton text="Quality" linkUrl="/" left={true}/>
                        <NavButton text="Interactions" linkUrl="/interactions"/>
                    </section>
                </section>)
            }
            case "interactions" : {
                return (
                    <section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
                        <h1 className="text-4xl text-left font-medium pb-5 text-pink">Interaction with your
                            application</h1>
                        <p className="pb-8">Explaining how to change the way you interact with your application to find
                            issues and bugs</p>
                        <section className="flex flex-row items-center space-x-4">
                            <NavButton text="Exploratory Testing" linkUrl="/exploratoryTesting" left={true}/>
                            <NavButton text="Objects" linkUrl="/objects"/>
                        </section>
                    </section>
                )
            }
            case "entities" : {
                return (
                    <section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
                        <h1 className="text-4xl text-left font-medium pb-5 text-pink">Dealing with Objects</h1>
                        <p className="pb-8">Explaining how important is it to be able to separate all the objects in
                            your application</p>
                        <section className="flex flex-row items-center space-x-4">
                            <NavButton text="Interactions" linkUrl="/interactions" left={true}/>
                            <NavButton text="States" linkUrl="/states"/>
                        </section>
                    </section>
                )
            }
            case "states" : {
                return (
                    <section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
                        <h1 className="text-4xl text-left font-medium pb-5 text-pink">States and changing states</h1>
                        <p className="pb-8">Demonstrating the importance of understanding transitions between different
                            states in your application </p>
                        <section className="flex flex-row items-center space-x-4">
                            <NavButton text="Objects" linkUrl="/objects" left={true}/>
                            <NavButton text="Environment" linkUrl="/environment"/>
                        </section>
                    </section>
                )
            }
            default: {
                return (<section>
                    <p>Section in progress</p>
                </section>)
            }
        }
    }

    const listOfLink = () => {
        return (<>
                <NavLink to="/"
                         className={(navData) => navLinkStyle(navData)}>
                    Quality
                </NavLink>
                <NavLink to="/exploratoryTesting"
                         className={(navData) => navLinkStyle(navData)}>
                    Exploratory Testing
                </NavLink>
                <NavLink to="/interactions"
                         className={(navData) => navLinkStyle(navData)}>
                    Interactions
                </NavLink>
                <NavLink to="/objects"
                         className={(navData) => navLinkStyle(navData)}>
                    Objects
                </NavLink>
                <NavLink to="/states"
                         className={(navData) => navLinkStyle(navData)}>
                    States
                </NavLink>
                <NavLink to="/environment"
                         className={(navData) => navLinkStyle(navData)}>
                    Environment
                </NavLink>
                <NavLink to="/summary"
                         className={(navData) => navLinkStyle(navData)}>
                    Summary
                </NavLink>
            </>
        )
    }

    const sideBar = () => {
        if (showSideNavBar) {
            return (
                <section className="relative pt-16 col-span-3">
                    <section className="fixed flex flex-col py-4 pl-6 pr-2 space-y-2  border-r border-pink">
                        {listOfLink()}
                    </section>
                </section>)
        } else {
            return null;
        }
    }

    const componentToDisplay = () => {
        let width = window.innerWidth;
        if (width < 650) {
            setShowSideNavBar(false)
        } else {
            return setShowSideNavBar(true);
        }
    }

    const showSideBarIcon = () => {
        if (!showSideNavBar) {
            return (
                <>
                    <section className="flex flex-row justify-end pt-2">
                        <button
                            className="flex flex-row justify-center"
                            ref={ref}
                            onClick={() => {
                                setIsVisible(!isVisible);
                            }}
                        >
                            <Bars3Icon className="h8 w-8"/>
                        </button>
                    </section>
                    {isVisible && (
                        <section
                            className="absolute w-9/12 flex right-7 flex-col pt-4 pl-4 space-y-1 bg-white rounded-xl">
                            {listOfLink()}
                        </section>
                    )
                    }
                </>
            )
        }
    }

    return (
        <section>
            <section className='bg-blue-light w-full flex flex-row justify-center'>
                {sectionsIntro(section)}
                {showSideBarIcon()}
            </section>
            <section className="flex flex-row justify-center">
                <section
                    className="bg-white-bg h-full text-black text-justify grid grid-cols-12 px-2 w-full md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
                    <section className={showSideNavBar ? "col-span-9" : "col-span-12"}>

                        {children}
                    </section>
                    {sideBar()}
                </section>
            </section>
            <section className="bg-blue-light flex flex-row justify-end pl-2 pr-2 md:pr-16 py-8">
                <NavButton text={navigationTextButton} linkUrl={navigationButtonLinkUrl}/>
            </section>
        </section>
    )
}