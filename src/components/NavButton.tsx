import {Link} from "react-router-dom";
import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/24/solid";

type NavButtonProps = {
    text: string;
    linkUrl: string;
    left?: boolean;
}

export const NavButton = ({text, linkUrl, left = false}:NavButtonProps) => {
    return(
        <section className="rounded-full bg-pink text-white text-left text-lg mt-4 py-2 px-6">
            <Link to={linkUrl} className="flex flex-row">
                {left && <ArrowLongLeftIcon className="h-8 w-8"/>}
                <span className=" font-semibold px-4">{text}</span>
                {!left && <ArrowLongRightIcon className="h-8 w-8"/>}
            </Link>
        </section>
    )
}