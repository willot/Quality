import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {SectionLink} from "./SectionLink";
import {PageTitle} from "./PageTitle";
import {HamburgerMenuSmallScreen} from "./HamburgerMenuSmallScreen";
import {ArticlePageFooter} from "./ArticlePageFooter";
import {ButtonFlow, ButtonFlowPages} from "../Utils/Interfaces";

export const listOfLink = () => {
    return (<>
            <NavLink to="/home"
                     className={(navData) => navLinkStyle(navData)}>
                Home
            </NavLink>
            <NavLink to="/quality"
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
};

export const navLinkStyle = (navData: any) => {
    return navData.isActive ? "text-blue font-semibold text-left" : "text-pink font-semibold text-left"
}

type LayoutWrapperProps = {
    children: React.ReactElement;
    page: string,
    currentSection?: string;
    setCurrentSection: (value: string) => void;
    setIsClickedSection: (value: boolean) => void;
}

export const LayoutWrapper = ({
                                  children,
                                  page,
                                  currentSection,
                                  setCurrentSection,
                                  setIsClickedSection
                              }: LayoutWrapperProps) => {
    const [showSideNavBar, setShowSideNavBar] = useState(window.innerWidth > 650);

    useEffect(() => {
        componentToDisplay();
        window.addEventListener('resize', componentToDisplay);
        return () => {
            window.removeEventListener('resize', componentToDisplay)
        }
    })

    const buttonFlowPages: ButtonFlowPages = {
        quality: {
            button1: {
                text: "",
                link: "",
            },
            button2: {
                text: "Exploratory Testing",
                link: "/exploratoryTesting"
            },
            listSection: ["Dictionary-definition", "Useful-definition", "Example", "Tests", "Value-of-tests"],
            title: "What is quality?",
            subTitle: "Let's start by a refresher on what quality is.",
        },
        exploratoryTesting: {
            button1: {
                text: "Quality",
                link: "/quality"
            },
            button2: {
                text: "Interactions",
                link: "/interactions"
            },
            listSection: ["The-Definition", "Why-is-it-useful?", "Basic-rules"],
            title: "Exploratory testing ",
            subTitle: "Introduction to exploratory testing."
        },
        interactions: {
            button1: {
                text: "Exploratory Testing",
                link: "/exploratoryTesting"
            },
            button2: {
                text: "Objects",
                link: "/objects"
            },
            listSection: ["Play-with-the-URL", "Use-your-keyboard"],
            title: "Interaction with your application",
            subTitle: "Explaining how to change the way you interact with your application to find issues and bugs.",
        },
        entities: {
            button1: {
                text: "Interactions",
                link: "/interactions"
            },
            button2: {
                text: "States",
                link: "/states"
            },
            listSection: ["What-is-an-Object?", "Exploring-the-objects", "Moving-on-from-blame"],
            title: "Dealing with Objects",
            subTitle: "Understanding the objects in your application.",
        },
        states: {
            button1: {
                text: "Objects",
                link: "/objects"
            },
            button2: {
                text: "Environment",
                link: "/environment"
            },
            listSection: ["What-is-a-state?", "Example", "Hot-take"],
            title: "States and changing states",
            subTitle: "Demonstrating the importance of understanding transitions between different in your application.",
        },
        environment: {
            button1: {
                text: "States",
                link: "/states"
            },
            button2: {
                text: "Summary",
                link: "/summary"
            },
            listSection: ["Example", "Hardware", "Limitless-environment"],
            title: "Application in its environment",
            subTitle: "Learning how the environment around your application affect the user experience.",
        },
        summary: {
            button1: {
                text: "Environment",
                link: "/environment"
            },
            button2: {
                text: "Quality",
                link: "/quality"
            },
            listSection: ["A-useful-tool", "When-to-use-exploratory-testing?"],
            title: "Summary",
            subTitle: "Summarize your learning on exploratory testing.",
        }
    }

    const GenerateListOfLink = (pageFlow: ButtonFlow | undefined) => {
        if (pageFlow) {
            return (
                pageFlow.listSection.map((idElement, index) => {
                    return <SectionLink idLink={idElement} currentSection={currentSection}
                                        setCurrentSection={setCurrentSection} setIsClickedSection={setIsClickedSection}
                                        key={index}/>
                }))
        }
    }

    const sideBar = () => {
        if (showSideNavBar) {
            return (
                <aside className="relative pt-16 col-span-3">
                    <section className="sticky top-6 flex flex-col py-4 pl-6 pr-2 space-y-2  border-r border-pink">
                        <>{GenerateListOfLink(buttonFlowPages[page])}</>
                    </section>
                </aside>)
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

    return (
        <main className="flex flex-col h-screen justify-between">
            <header className='bg-blue-light w-full flex flex-row justify-center'>
                <PageTitle pageButtonFlow={buttonFlowPages[page]}/>
                <HamburgerMenuSmallScreen showSideNavBar={showSideNavBar}/>
            </header>
            <section className="flex flex-row justify-center">
                <section
                    className="bg-white-bg h-full text-black text-justify grid grid-cols-12 px-2 w-full md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-5/12">
                    <article className={showSideNavBar ? "col-span-9" : "col-span-12"}>
                        {children}
                    </article>
                    {sideBar()}
                </section>
            </section>
            <footer className="bg-blue-light">
                <ArticlePageFooter buttonFlow={buttonFlowPages[page]}/>
            </footer>
        </main>
    )
};