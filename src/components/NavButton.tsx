import {Link} from "react-router-dom";
import {ArrowLongRightIcon} from "@heroicons/react/24/solid";

type NavButtonProps = {
    text: string,
    linkUrl: string,
}

export const NavButton = ({text, linkUrl}:NavButtonProps) => {
    return(
        <button className="rounded-full bg-pink text-white text-left text-lg mt-4 py-2 px-6">
            <Link to={linkUrl} className="flex flex-row items-center">
                <span className=" font-semibold pr-4">{text}</span>
                <ArrowLongRightIcon className="h-8 w-8"/>
            </Link>
        </button>
    )
}