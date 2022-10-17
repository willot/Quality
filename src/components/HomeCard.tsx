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
        <section className="border border-blue rounded-md w-60 m-4">
            <Link to={link} className="flex flex-col justify-between content-between h-full">
                <div className="space-y-2 p-4 grow">
                    <h2 className="text-left font-semibold text-blue text-2xl">{title}</h2>
                    <p className="text-left">{text}</p>
                </div>
                <div className="border border-t-1 border-x-0 border-b-0 border-t-blue flex flex-row p-4 h-20 grow-0">
                    <span className="pr-4">Read more</span><ArrowLongRightIcon className="h-6 w-6"/>
                </div>
            </Link>
        </section>
    )
}