import {NavLink} from "react-router-dom";

export const SideNavBar = () => {
    return (
        <section className="flex flex-col pt-10 pl-4">
            <NavLink to="/"
                     className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                Quality
            </NavLink>
            <NavLink to="/exploratoryTesting" className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left"}>
                Exploratory Testing
            </NavLink>
            <NavLink to="/interactions"className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left" }>
                Interactions
            </NavLink>
            <NavLink to="/objects" className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left" }>
                Objects
            </NavLink>
            <NavLink to="/states" className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left" }>
                States
            </NavLink>
            <NavLink to="/ecoSystem" className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left" }>
                App environment
            </NavLink>
            <NavLink to="/summary" className={(navData) => navData.isActive ? "text-green font-semibold text-left" : "text-pink font-semibold text-left" }>
                Summary
            </NavLink>
        </section>
    )
}