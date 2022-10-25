import {Bars3Icon} from "@heroicons/react/24/solid";
import React from "react";
import {listOfLink} from "./LayoutWrapper";

type HamburgerMenuSmallScreenProps = {
    ref: React.MutableRefObject<any>,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isVisible: boolean,
    showSideNavBar: boolean,
}

export const HamburgerMenuSmallScreen = ({ref, setIsVisible, isVisible, showSideNavBar}: HamburgerMenuSmallScreenProps) => {
    return (
        <>
            {!showSideNavBar && (<>
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
                    )}
                </>
            )}
        </>
    )

}