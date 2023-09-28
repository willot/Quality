import {Bars3Icon} from "@heroicons/react/24/solid";
import React from "react";
import {listOfLink} from "./LayoutWrapper";
import {OutsideClickDetector} from "../hooks/OutsideClickDetector";

type HamburgerMenuSmallScreenProps = {
    showSideNavBar: boolean,
}

export const HamburgerMenuSmallScreen = ({ showSideNavBar}: HamburgerMenuSmallScreenProps) => {

    const {ref, isVisible, setIsVisible} = OutsideClickDetector(false);
    return (
        <>
            {!showSideNavBar && (<>
                    <div className="flex flex-row justify-end pt-2">
                        <button
                            className="flex flex-row justify-center"
                            aria-label={"Menu options"}
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
                    )}
                </>
            )}
        </>
    )

}