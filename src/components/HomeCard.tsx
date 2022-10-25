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
        <section className="w-60 m-4">
            <Link to={link} className="group flex flex-col justify-between content-between h-full border border-2 border-blue rounded-md active:translate-y-0.5 duration-200 active:border-pink hover:border-pink">
                <div className="space-y-2 p-4 grow">
                    <h2 className="text-left font-semibold text-blue text-2xl">{title}</h2>
                    <p className="text-left">{text}</p>
                </div>
                <div className="border border-t-2 border-x-0 border-b-0 border-t-blue flex flex-row p-4 h-20 grow-0 group-active:border-pink group-hover:border-pink">
                    <span className="pr-4">Read more</span><ArrowLongRightIcon className="h-6 w-6"/>
                </div>
            </Link>
        </section>
    )
}