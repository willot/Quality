import {ArrowLongLeftIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

export const States = () => {
    return (
        <section className="bg-blue flex flex-row justify-center w-full">
            <section
                className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <Link to="/objects" className="flex flex-row items-center mt-10">
                    <ArrowLongLeftIcon className="text-pink h-16 w-16"/>
                    <span className="text-pink text-lg font-semibold w-52 pl-6">Back to objects</span>
                </Link>
                <h1 className="text-4xl font-medium pb-5">States and changing states</h1>
                <p>This is often where the weird bugs happen. The one that are hard to reproduce or even to understand.
                    Have you ever seen a website asking you not to click on the back button when they process a request.
                    This is a sign that you are currently in a transition state between. Going back is going to probably
                    interfere with your current process.</p>
            </section>
            SOMETHING
            Aleaxa bug started to play music then I ask to play music on another system and I couldn't stop it
        </section>
    )
}