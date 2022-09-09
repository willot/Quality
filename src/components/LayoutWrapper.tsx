import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";

type LayoutWrapperProps = {
    children: React.ReactElement ;
}

export const LayoutWrapper = ({children}: LayoutWrapperProps) => {
    const [showSideNavBar, setShowSideNavBar] = useState(window.innerWidth > 450);

    useEffect(() => {
        componentToDisplay();
        window.addEventListener('resize', componentToDisplay);
        return () => {
            window.removeEventListener('resize', componentToDisplay)
        }
    })

    const sideBar = () => {
        return (
            <section className="flex flex-col pt-20 pl-4 space-y-2 col-span-3">
                <NavLink to="/"
                         className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                    Quality
                </NavLink>
                <NavLink to="/exploratoryTesting"
                         className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                    Exploratory Testing
                </NavLink>
                <NavLink to="/interactions"
                         className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                    Interactions
                </NavLink>
                <NavLink to="/objects"
                         className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                    Objects
                </NavLink>
                <NavLink to="/states"
                         className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                    States
                </NavLink>
                <NavLink to="/ecoSystem"
                         className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                    Environment
                </NavLink>
                <NavLink to="/summary"
                         className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                    Summary
                </NavLink>
            </section>)
    }

    const componentToDisplay = () => {
        let width = window.innerWidth;
        if (width < 450) {
            setShowSideNavBar(false)
        } else {
            return setShowSideNavBar(true);
        }
    }
    return (
        <section className=" bg-blue h-full text-white text-justify grid grid-cols-12 w-11/12 md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
            {showSideNavBar && (sideBar())}
            {!showSideNavBar && (null)}
            <section className={showSideNavBar? "col-span-9" : "col-span-12"}>
                {children}
            </section>
        </section>
    )
}