import {Link} from "react-router-dom";
import {ArrowLongLeftIcon} from "@heroicons/react/24/solid";

export const Entities = () => {

    return(
        <section className="bg-blue flex flex-row justify-center w-full h-screen">
            <section
                className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <Link to="/interactions" className="flex flex-row items-center mt-10">
                    <ArrowLongLeftIcon className="text-pink h-16 w-16"/>
                    <span className="text-pink text-lg font-semibold w-52 pl-6">Back to Interacting</span>
                </Link>
                <h1 className="text-4xl font-medium pb-5">Dealing with Objects</h1>
                <p>Object is maybe more an engineer term to describe something that can be created, or updated, or
                deleted. An example can be a user in an application, a transaction when buying something, a post on social
                media. Application are full of this object, they represent the logic of the application. This objects most
                of the time are connected with each other. A user will have an address this address is more than likely be its
                own object. A transaction is connected to a user or a user is connected to a transaction. This is a good
                example because the direction of the relationship has an effect on the logic and possible bugs. For
                example lets think of an insurance website that let you buy a personal customized policy. You will have
                an policy object and then a user "you" object. Then the insurance company decide that users can add other
                people to their policy. Like multiple driver for a car. Now there are multiple users connected to one
                policy. Can each one of them modify the policy? Or only the principal user? The amount of interactions
                can increase quickly and all this interactions held logic that can hide a bug.</p>
                <section>
                    <h2>Exploring the objects</h2>
                    <p>The first thing is that you want to identify these objects. As stated earlier they are things on
                        which you can take actions. A lot of things can happen when you create an object. Are all the
                    field require? Can you put empty space? can you use weird characters Ω√? Is there a limit in the
                    number of characters? This is a common one, database will have limit for the number of character in
                    a field but the front end will not enforce it. The data is send to the back end and it crashes and
                    send an error...</p>
                </section>
            </section>
        </section>
    )
}