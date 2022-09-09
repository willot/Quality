import {Link, useLocation} from "react-router-dom";
import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {EntitiesForm} from "../components/EntitiesForm";
import {useEffect, useState} from "react";
import {LayoutWrapper} from "../components/LayoutWrapper";

export type User = {
    firstName?: string;
    lastName?: string;
    street?: string;
    apt?: string;
    city?: string;
}

export const Entities = () => {
    const [entity, setEntity] = useState<User>();

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className="bg-blue flex flex-row justify-center w-full">
            <LayoutWrapper>
                <section className="bg-blue h-full text-white text-justify py-10 px-5">
                    <h1 className="text-4xl font-medium pb-5">Dealing with Objects</h1>
                    <p>Object is maybe more an engineer term to describe something that can be created, updated, or
                        deleted. An example can be a user in an application, a transaction when buying something, a post
                        on
                        social media. Application are full of these objects. They represent the business logic of the
                        application. These objects most of the time are connected/interact with each other. A user will
                        have
                        an address this address is
                        more than likely be its own object. A transaction is connected to a user or a user is connected
                        to a
                        transaction. This is a good example because the direction of the relationship has an effect on
                        the
                        logic and possible bugs.
                    </p>
                    <p className="pt-2">For example, an insurance website lets you buy a personal
                        customized policy. You will have an policy object and then a user "you" object. Then the
                        insurance
                        company decide that users can add other people to their policy. Like multiple driver for a car.
                        Now
                        there are multiple users connected to one policy. Can each one of them modify the policy? Or
                        only
                        the principal user? The amount of interactions can increase quickly and all this interactions
                        held
                        logic that can hide a bug.
                    </p>
                    <section className="py-10">
                        <h2 className="font-bold">Exploring the objects</h2>
                        <p className="pb-2">The first thing is that you want to identify these objects. As stated
                            earlier
                            they are entities on which you can take actions. A lot of things can happen when you create
                            an
                            object. Are all the fields required? Can you put empty spaces? can you use weird characters
                            "Ω√"?
                            Is there a limit in the number of characters? The problem of string being too long is a
                            pretty
                            common one. Database have limits for the number of characters in a field but the front end
                            will
                            not always enforce it. Therefore the data is send to the back end and it crashes and send
                            back
                            an
                            error... </p>
                        <p className="pb-4 font-semibold text-green">Fill the example form with fake info to
                            continue.</p>
                        <h3 className="text-pink font-semibold pb-4">Creating objects</h3>
                        <EntitiesForm setEntity={setEntity}/>
                        <section className="pt-4">
                            <p className="font-semibold pb-2">Saved objects</p>
                            {entity && (
                                <>
                                    <section>
                                        <p className="font-bold text-pink">User</p>
                                        <p className="pl-6"><span
                                            className="font-semibold">First name:</span> {entity.firstName}</p>
                                        <p className="pl-6"><span
                                            className="font-semibold">Last name:</span> {entity.lastName}</p>
                                        <p className="font-bold text-pink">Address</p>
                                        <p className="pl-6"><span
                                            className="font-semibold">Street:</span> {entity.street}
                                        </p>
                                        <p className="pl-6"><span
                                            className="font-semibold">Apartment #:</span> {entity.apt}
                                        </p>
                                        <p className="pl-6"><span className="font-semibold">City:</span> {entity.city}
                                        </p>
                                    </section>
                                    <section className="pt-2">
                                        <p>We have one form but we can see that we created two separated objects. One
                                            user
                                            with a first and last name and an address with street, apartment number,
                                            and
                                            city.</p>
                                        <p className="pt-2">If you play around you can notice a few things. There are no
                                            limit in the number
                                            of characters that you can enter inside each input. So if you want to type
                                            3000 characters into the input box you can (It will work). The only reason
                                            that
                                            it doesn't produce an error is that in this application there is no database
                                            saving this information. Otherwise, it is very
                                            likely we will run into some field constraint in the database particularly
                                            for
                                            field like city. When you do exploratory testing it is important to know
                                            what
                                            kind of data a user will enter. For example the biggest name for a european
                                            city
                                            is 58 characters in Welch. Knowing this can help you set some good test
                                            cases.
                                            One that I often run into is middle name. If you complete immigration
                                            paperwork
                                            this field often come up. I have 2 middle name... Most of the time it only
                                            let
                                            you enter one which can be a problem for immigration paperwork. Errors while
                                            completing form are not always handle very well.
                                        </p>
                                        <p>Often no error is display to
                                            let the user know that the data was not save
                                            or if there is an error no explanation is given to remedy it. So it is
                                            important
                                            for the front end to be aware to the limitation of the back end to protect
                                            the
                                            users against potential failure.</p>
                                        <p>Another issue you can find is that the form doesn't trim white space. You can
                                            currently enter white space in every field and it will let you move
                                            forward.</p>
                                    </section>
                                    <section className="pt-4">
                                        <h3 className="text-pink font-semibold ">Updating objects</h3>
                                        <p className="pb-4 text-green font-semibold">Now update the information you
                                            enter
                                            earlier.</p>
                                        <EntitiesForm setEntity={setEntity} originalEntities={entity}/>
                                        <p className="font-semibold py-2">Updated entities</p>
                                        {entity && (
                                            <section className="pb-4">
                                                <p className="font-bold text-pink">User</p>
                                                <p className="pl-6"><span
                                                    className="font-semibold">First name:</span> {entity.firstName}</p>
                                                <p className="pl-6"><span
                                                    className="font-semibold">Last name:</span> {entity.lastName}</p>
                                                <p className="font-bold text-pink">Address</p>
                                                <p className="pl-6"><span
                                                    className="font-semibold">Street:</span> {entity.street}
                                                </p>
                                                <p className="pl-6"><span
                                                    className="font-semibold">Apartment #:</span> {entity.apt}
                                                </p>
                                                <p className="pl-6"><span
                                                    className="font-semibold">City:</span> {entity.city}</p>
                                            </section>
                                        )}

                                        <p>Now let's imagine that we want to update our objects. We can ensure that
                                            city and last name are still required. We can enter white space in every
                                            field and see that it sadly it still a bug because it is saving the empty
                                            space
                                            as values... Now let's try to update the apartment field. Let's image that
                                            you
                                            recently move and
                                            are updating your address. You lived in an apartment complex and now you
                                            have a nice house. Ouch what happens. It is telling me I can't do that. This
                                            is sometimes an issue.
                                            System are okay with blank field field when objects are created but it will
                                            refuse to overwrite a field with an Null if there is already data there.
                                            This is
                                            why exploratory testing is so important. The website is working correctly
                                            and
                                            giving you a correct error. But this go against what the user want to do. It
                                            is a case where the acceptance criteria are wrong. </p>
                                    </section>
                                    <p className="pt-4">If you are critic you could say that we don't need exploratory
                                        testing. We need the engineers
                                        to write more tests or better tests. I think it is true. But it is hard for
                                        engineer to think about all these cases. What also makes it complicated is that
                                        the engineer that created the form originally may not be the same one that add
                                        the
                                        apartment field. Context get lost all the
                                        time and tests are very useful to document functionality. Engineers will miss
                                        things
                                        because that is what human
                                        do. When you build something you can't think about all the things that go wrong.
                                        But
                                        what you can do is writing new tests when a bugs are reported to ensure that in
                                        the
                                        future this bug doesn't happen again. For example someone found the bug that
                                        white
                                        space should be trim when submitting data. You can easily write a unit test for
                                        it
                                        an move on.</p>
                                </>
                            )}

                        </section>
                    </section>
                    <Link to="/states" className="flex flex-row items-center pt-10">
                        <span className="text-pink text-lg font-semibold w-52">States</span>
                        <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                    </Link>
                </section>
            </LayoutWrapper>
        </section>
    )
}