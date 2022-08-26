import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

export const NoPage = () => {
    return (
        <section className="bg-blue flex flex-column justify-center w-full">
            <section
                className="bg-blue h-screen text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <h1 className="text-xl text-pink font-bold pb-10">Good try! but this page doesn't exist</h1>
                <section>
                    <h2 className="text-white font-bold">Where do you want to go?</h2>
                    <Link to="/" className="flex flex-row items-center">
                        <span className="text-pink text-lg font-semibold w-52">Quality</span>
                        <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                    </Link>
                    <Link to="/exploratoryTesting" className="flex flex-row items-center pb-6">
                        <span className="text-pink text-lg font-semibold w-52">Exploratory Testing</span>
                        <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                    </Link>
                    <p>If you came here from my '/blabla' link example than click on this link to go back where you were.</p>
                    <Link to="/interactions" className="flex flex-row items-center">
                        <span className="text-pink text-lg font-semibold w-52">Interactions</span>
                        <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                    </Link>
                    <Link to="/objects" className="flex flex-row items-center pt-10">
                        <span className="text-pink text-lg font-semibold w-52">Dealing with Objects</span>
                        <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                    </Link>
                </section>
            </section>
        </section>
    )
}