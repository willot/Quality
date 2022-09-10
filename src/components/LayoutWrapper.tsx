import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {OutsideClickDetector} from "../hooks/OutsideClickDetector";

type LayoutWrapperProps = {
    children: React.ReactElement;
}

export const LayoutWrapper = ({children}: LayoutWrapperProps) => {
    const [showSideNavBar, setShowSideNavBar] = useState(window.innerWidth > 450);
    const {ref, isVisible, setIsVisible} = OutsideClickDetector(false);

    useEffect(() => {
        componentToDisplay();
        window.addEventListener('resize', componentToDisplay);
        return () => {
            window.removeEventListener('resize', componentToDisplay)
        }
    })

    const navLinkStyle = (navData: any) => {
        if (showSideNavBar) {
            return navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"
        } else {
            return navData.isActive ? "text-green font-semibold text-left" : "text-blue font-semibold text-left"
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
                <NavLink to="/ecoSystem"
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
                <section className="flex flex-col pt-20 pl-4 space-y-2 col-span-3">
                    {listOfLink()}
                </section>)
        } else {
            return null;
        }
    }

    const componentToDisplay = () => {
        let width = window.innerWidth;
        if (width < 450) {
            setShowSideNavBar(false)
        } else {
            return setShowSideNavBar(true);
        }
    }

    const showSideBarIcon = () => {
        if (!showSideNavBar) {
            return (
                <>
                    <section className="flex flex-row justify-end">
                        <button ref={ref} onClick={() => {
                            setIsVisible(!isVisible);
                        }}>
                            <Bars3Icon className="h12 w-12 pr-5 pt-4 "/>
                        </button>
                    </section>
                    {isVisible && (
                        <section  className="absolute w-9/12 flex right-3 flex-col pt-4 pl-4 space-y-1 bg-white rounded-xl">
                            {listOfLink()}
                        </section>
                    )
                    }
                </>
            )
        }
    }

    return (
        <section
            className=" bg-blue h-full text-white text-justify grid grid-cols-12 w-11/12 md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
            {sideBar()}
            <section className={showSideNavBar ? "col-span-9" : "col-span-12"}>
                {showSideBarIcon()}
                {children}
            </section>
        </section>
    )
}