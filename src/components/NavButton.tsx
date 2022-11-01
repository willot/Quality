import {Link} from "react-router-dom";
import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/24/solid";

type NavButtonProps = {
    text: string;
    linkUrl: string;
    left?: boolean;
}

export const NavButton = ({text, linkUrl, left = false}: NavButtonProps) => {
    return (
        <Link to={linkUrl}
              className="rounded-full bg-pink text-white text-left text-sm md:text-lg mt-4 py-2 px-6 hover:bg-blue flex flex-row">
            {left && <ArrowLongLeftIcon className="h-8 w-8 mr-2 md:mr-4"/>}
            <span className=" font-semibold my-auto">{text}</span>
            {!left && <ArrowLongRightIcon className="h-8 w-8 ml-2 md:mr-4"/>}
        </Link>
    )
}