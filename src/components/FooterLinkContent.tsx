import {HeartIcon} from "@heroicons/react/24/solid";
import githubIcon from "../Images/GitHub-Mark-120px-plus.png";
import linkedIn from "../Images/LI-In-Bug.png"
import React from "react";

export const FooterLinkContent = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row justify-between">
                <p className="font-bold border-b border-grey-light pb-2 mb-4 text-xl">Learning more about exploratory testing</p>
                <section className="flex flex-row space-x-2 pb-4 md:pb-0">
                    <a href={'https://github.com/willot'} target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} className="h-8 w-8 rounded-full hover:bg-grey-light" alt="Link to Github page"/>
                    </a>
                    <a href={"https://www.linkedin.com/in/willot"} target={"_blank"} rel="noopener noreferrer">
                        <img src={linkedIn} className="h-8 w-8 hover:bg-grey-light" alt="Link to LinkedIn page"/>
                    </a>
                </section>
            </section>
            <section className="flex flex-row">
                <p>Made with</p>
                <HeartIcon className="text-red h-6 w-6 mx-1"/>
                <a className="text-blue underline underline-offset-2"
                   href="https://www.linkedin.com/in/willot"
                   rel="noopener noreferrer" target="_blank">by: Vianney Willot</a>
            </section>
            <p>Senior Software Engineer at <a href="https://www.thisisartium.com/"
                                              className="text-pink underline underline-offset-2">Artium</a></p>
            <p className='pt-2'>Website created with <a href="https://reactjs.org/"
                                                       className="text-blue underline underline-offset-2">React</a> and <a
                href="https://tailwindcss.com/" className="text-blue underline underline-offset-2">Tailwind</a></p>
        </>
    )
}