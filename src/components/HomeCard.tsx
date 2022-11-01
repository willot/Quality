import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import React from "react";

type HomeCardProps = {
    title: string;
    text: string;
    link: string;
}

export const HomeCard = ({title, text, link}: HomeCardProps) => {
    return (
        <section className="w-60 mx-4 mt-8 group">
            <Link to={link} className="group flex flex-col justify-between content-between h-full border border-2 border-blue rounded-md transition ease-in-out active:translate-y-0.5 duration-300 active:border-pink hover:border-pink">
                <div className="space-y-2 p-4 grow">
                    <h2 className="text-left font-semibold text-blue text-2xl transition ease-in-out duration-300 group-hover:text-pink">{title}</h2>
                    <p className="text-left">{text}</p>
                </div>
                <div className="border border-t-2 border-x-0 border-b-0 border-t-blue flex flex-row p-4 h-20 grow-0 transition ease-in-out group-active:border-pink group-hover:border-pink duration-300">
                    <span className="pr-4 font-semibold my-auto">Read more</span><ArrowLongRightIcon className="my-auto h-6 w-6 transition duration-300 group-hover:translate-x-2"/>
                </div>
            </Link>
        </section>
    )
}