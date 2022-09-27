import {NavButton} from "./NavButton";
import React from "react";

type PageTitleProps={
    pageButtonFlow: any;
}

const PageTitle = ({pageButtonFlow}:PageTitleProps) => {
    return (

        <section className="px-4 text-left w-full py-28 md:w-10/12 lg:w-9/12 xl:w8/12 2xl:w-7/12">
            <h1 className="text-4xl text-left font-medium pb-5 text-pink">pageButtonFlow.title</h1>
            <p className="pb-8">pageButtonFlow.subTitle</p>
            <nav className="flex flex-col w-max justify-items-start sm:flex-row sm:items-center sm:space-x-4">
                <NavButton text={pageButtonFlow.button1.text}
                           linkUrl={pageButtonFlow.button1.link} left={true}/>
                <NavButton text={pageButtonFlow.button2.text}
                           linkUrl={pageButtonFlow.button2.link}/>
            </nav>
        </section>
    )
}