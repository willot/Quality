import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {OutsideClickDetector} from "../hooks/OutsideClickDetector";
import {NavButton} from "./NavButton";
import {SectionLink} from "./SectionLink";
import {PageTitle} from "./PageTitle";

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

    const buttonFlow = {
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
                link: "/"
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
            listSection: [],
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
            listSection: [],
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
            listSection: [],
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
                link: "/"
            },
            listSection: [],
            title: "Summary",
            subTitle: "Summarize your learning on exploratory testing.",
        }
    }

    type ObjectKey = keyof typeof buttonFlow;

    const pageName = page as ObjectKey;

    const sectionsIntro = (sectionName: string) => {
        switch (sectionName) {
            case "quality": {
                return (<PageTitle pageButtonFlow={buttonFlow.quality} firstButton={false}/>);
            }
            case "exploratoryTesting" : {
                return (<PageTitle pageButtonFlow={buttonFlow.exploratoryTesting}/>);
            }
            case "interactions" : {
                return (<PageTitle pageButtonFlow={buttonFlow.interactions}/>);
            }
            case "entities" : {
                return (<PageTitle pageButtonFlow={buttonFlow.entities}/>);
            }
            case "states" : {
                return (<PageTitle pageButtonFlow={buttonFlow.states}/>);
            }
            case "environment" : {
                return (<PageTitle pageButtonFlow={buttonFlow.environment}/>);
            }
            case "summary" : {
                return (<PageTitle pageButtonFlow={buttonFlow.summary}/>);
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
    };

    const GenerateListOfLink = (listOfId: Array<string>) => {
        return (
            listOfId.map((idElement, index) => {
                return <SectionLink idLink={idElement} currentSection={currentSection}
                                    setCurrentSection={setCurrentSection} setIsClickedSection={setIsClickedSection}
                                    key={index}/>
            }))
    }

    const linksForSpecificPage = (pageName: string) => {
        switch (pageName) {
            case "quality" : {
                return (
                    <>{GenerateListOfLink(buttonFlow.quality.listSection)}</>
                )
            }
            case "exploratoryTesting" : {
                return (
                    <>{GenerateListOfLink(buttonFlow.exploratoryTesting.listSection)}</>
                )
            }
            case "interactions" : {
                return (
                    <>{GenerateListOfLink(buttonFlow.interactions.listSection)}</>
                )
            }
            default : {
                return listOfLink();
            }
        }
    }

    const sideBar = () => {
        if (showSideNavBar) {
            return (
                <aside className="relative pt-16 col-span-3">
                    <section className="fixed flex flex-col py-4 pl-6 pr-2 space-y-2  border-r border-pink">
                        {linksForSpecificPage(pageName)}
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

    const showSideBarIcon = () => {
        if (!showSideNavBar) {
            return (
                <>
                    <div className="flex flex-row justify-end pt-2">
                        <button
                            className="flex flex-row justify-center"
                            ref={ref}
                            onClick={() => {
                                setIsVisible(!isVisible);
                            }}
                        >
                            <Bars3Icon className="h8 w-8"/>
                        </button>
                    </div>
                    {isVisible && (
                        <nav
                            className="absolute w-9/12 flex right-7 flex-col pt-4 pl-4 space-y-1 bg-white rounded-xl">
                            {listOfLink()}
                        </nav>
                    )
                    }
                </>
            )
        }
    }


    return (
        <main className="flex flex-col h-screen justify-between">
            <header className='bg-blue-light w-full flex flex-row justify-center'>
                {sectionsIntro(page)}
                {showSideBarIcon()}
            </header>
            <section className="flex flex-row justify-center">
                <section
                    className="bg-white-bg h-full text-black text-justify grid grid-cols-12 px-2 w-full md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
                    <article className={showSideNavBar ? "col-span-9" : "col-span-12"}>
                        {children}
                    </article>
                    {sideBar()}
                </section>
            </section>
            <footer className="bg-blue-light">
                <nav
                    className={`flex flex-col sm:flex-row ${buttonFlow[pageName].button1.text !== "" ? "justify-between" : "justify-end"} w-max pl-2 pr-2 py-8 w-full md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12 m-auto`}>
                    {buttonFlow[pageName].button1.text !== "" &&
                    <NavButton text={buttonFlow[pageName].button1.text} linkUrl={buttonFlow[pageName].button1.link}
                               left={true}/>}
                    <NavButton text={buttonFlow[pageName].button2.text} linkUrl={buttonFlow[pageName].button2.link}/>
                </nav>
            </footer>
        </main>
    )
};