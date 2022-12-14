import {NavButton} from "./NavButton";
import {Link} from "react-router-dom";
import {ArrowLongLeftIcon} from "@heroicons/react/24/solid";
import React from "react";
import {ButtonFlow} from "../Utils/Interfaces";
import {FooterLinkContent} from "./FooterLinkContent";

interface ArticlePageFooterProps {
    buttonFlow: ButtonFlow | undefined,
}

export const ArticlePageFooter = ({buttonFlow}: ArticlePageFooterProps) => {
    return (
        buttonFlow ? (
            <section className="">
                <nav className="pt-12">
                    <section
                        className={`flex flex-col pb-8 px-2 sm:flex-row w-full md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-5/12 m-auto ${buttonFlow.button1.text !== "" ? "justify-between" : "justify-end"} `}>
                        {buttonFlow.button1.text !== "" &&
                        <NavButton text={buttonFlow.button1.text}
                                   linkUrl={buttonFlow.button1.link}
                                   left={true}/>}
                        <NavButton text={buttonFlow.button2.text}
                                   linkUrl={buttonFlow.button2.link}/>
                    </section>
                    <section className="py-4 bg-blue">
                        <Link to="/home"
                              className="flex flex-row w-full md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-5/12 m-auto px-2 group">
                            <ArrowLongLeftIcon className="h-8 w-8 transition duration-500 group-hover:-translate-x-2"/>
                            <span className=" font-semibold my-auto px-4">Back to Home page</span>
                        </Link>
                    </section>
                </nav>
                <section className={"bg-white pt-12"}>
                    <div className="pb-28 px-2 w-full md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-5/12 m-auto bg-white">
                        <FooterLinkContent/>
                    </div>
                </section>
            </section>) : null)
}