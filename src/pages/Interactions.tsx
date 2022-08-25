import {Link} from "react-router-dom";
import {ArrowLongLeftIcon} from "@heroicons/react/24/solid";

export const Interactions = () => {
    return (
        <section className="bg-blue flex flex-row justify-center w-full">
            <section
                className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <Link to="/exploratoryTesting" className="flex flex-row items-center pt-10">
                    <ArrowLongLeftIcon className="text-pink h-16 w-16"/>
                    <span className="text-pink text-lg font-semibold w-52 pl-6">Exploratory Testing</span>
                </Link>
                <h1>Interaction with your application</h1>
            </section>
        </section>
    )
}