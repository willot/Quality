import {Link} from "react-router-dom";
import {ArrowLongLeftIcon} from "@heroicons/react/24/solid";
import {EntitiesForm} from "../components/EntitiesForm";
import {useState} from "react";

export type User = {
    firstName?: string;
    lastName?: string;
    street?: string;
    apt?: string;
    city?: string;
}

export const Entities = () => {
    const [entity, setEntity] = useState<User>();

    return (
        <section className="bg-blue flex flex-row justify-center w-full">
            <section
                className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <Link to="/interactions" className="flex flex-row items-center mt-10">
                    <ArrowLongLeftIcon className="text-pink h-16 w-16"/>
                    <span className="text-pink text-lg font-semibold w-52 pl-6">Back to Interacting</span>
                </Link>
                <h1 className="text-4xl font-medium pb-5">Dealing with Objects</h1>
                <p>Object is maybe more an engineer term to describe something that can be created, or updated, or
                    deleted. An example can be a user in an application, a transaction when buying something, a post on
                    social media. Application are full of this object, they represent the logic of the application. This
                    objects most of the time are connected with each other. A user will have an address this address is
                    more than likely be its own object. A transaction is connected to a user or a user is connected to a
                    transaction. This is a good example because the direction of the relationship has an effect on the
                    logic and possible bugs. For example lets think of an insurance website that let you buy a personal
                    customized policy. You will have an policy object and then a user "you" object. Then the insurance
                    company decide that users can add other people to their policy. Like multiple driver for a car. Now
                    there are multiple users connected to one policy. Can each one of them modify the policy? Or only
                    the principal user? The amount of interactions can increase quickly and all this interactions held
                    logic that can hide a bug.</p>
                <section className="py-10">
                    <h2 className="font-bold">Exploring the objects</h2>
                    <p className="pb-4">The first thing is that you want to identify these objects. As stated earlier
                        they are things on
                        which you can take actions. A lot of things can happen when you create an object. Are all the
                        field require? Can you put empty space? can you use weird characters "Ω√"? Is there a limit in
                        the number of characters? The problem of string being too long is pretty common one, database
                        have limit for the number of characters in a field but the front end will not enforce it.
                        Therefore the data is send to the back end and it crashes and send an error...</p>
                    <EntitiesForm setEntity={setEntity}/>
                    <section className="pt-4">
                        <h3 className="font-semibold pb-2">Saved entities</h3>
                        {entity && (
                            <>
                                <section>
                                    <p className="font-bold text-pink">User</p>
                                    <p className="pl-6"><span
                                        className="font-semibold">First name:</span> {entity.firstName}</p>
                                    <p className="pl-6"><span
                                        className="font-semibold">Last name:</span> {entity.lastName}</p>
                                    <p className="font-bold text-pink">Address</p>
                                    <p className="pl-6"><span className="font-semibold">Street:</span> {entity.street}
                                    </p>
                                    <p className="pl-6"><span className="font-semibold">Apartment #:</span> {entity.apt}
                                    </p>
                                    <p className="pl-6"><span className="font-semibold">City:</span> {entity.city}</p>
                                </section>
                                <section className="pt-2">
                                    <p>We have one form but we can see that we created 2 separated entities. One user
                                        with a first and last name and an address with street apartment number and
                                        city.</p>
                                </section>

                            </>
                        )}
                    </section>
                </section>
            </section>
        </section>
    )
}