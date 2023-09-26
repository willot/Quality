import {useLocation} from "react-router-dom";
import {EntitiesForm} from "../components/EntitiesForm";
import {useEffect, useState} from "react";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {ShowSectionHook} from "../hooks/ShowSectionHook";

export type User = {
    firstName?: string;
    lastName?: string;
    street?: string;
    apt?: string;
    city?: string;
}

export const Entities = () => {
    const [entity, setEntity] = useState<User>();
    const [idVisible, setIdVisible] = useState("");
    const [clickedSection, setIsClickedSection] = useState(false)

    const {
        ref1,
        ref2,
        ref3
    } = ShowSectionHook(clickedSection, setIsClickedSection, setIdVisible, window, "Moving-on-from-blame");


    const {pathname} = useLocation();
    useEffect(() => {
        document.title = 'Exploratory Testing-Objects';
        window.scrollTo(0, 0);
        setIdVisible("What-is-an-Object?");
    }, [pathname]);

    return (
        <section className="bg-white-bg flex flex-row justify-center w-full">
            <LayoutWrapper page="entities" currentSection={idVisible} setCurrentSection={setIdVisible}
                           setIsClickedSection={setIsClickedSection}>
                <section className="bg-white-bg h-full text-black text-justify py-10 px-1">
                    <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref1}
                        id="What-is-an-Object?">What is an Object?</h2>
                    <p>In engineering, an 'object' is a term used to denote an entity that can be created, updated, or
                        deleted. For instance, think of a 'user' within an application, a 'transaction' when conducting
                        an online purchase, or a 'post' shared on a social media platform. These objects form the
                        backbone of applications, embodying the underlying business logic.
                    </p>
                    <p>These objects are extensively interconnected, establishing a web of relationships. For example, a
                        'user' may possess an 'address,' which is likely to be considered an independent object.
                        Similarly, a 'transaction' is linked to a 'user,' and conversely, a 'user' is connected to a
                        'transaction.' The direction of these relationships significantly influences the system's logic
                        and can potentially introduce bugs.</p>
                    <p className="pt-2">Consider an insurance website that allows users to purchase personalized
                        policies. In this scenario, you have a 'policy' object and a 'user' object representing you.
                        Now, if the insurance company decides to permit users to add additional individuals to their
                        policy, such as multiple drivers for a vehicle, the complexity of interactions escalates.
                        Questions arise, such as: Can each user modify the policy, or only the principal user? This
                        surge in interactions can rapidly escalate, and each interaction carries its own logic,
                        potentially concealing a bug.
                    </p>
                    <section className="pt-10">
                        <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4"
                            id="Exploring-the-objects" ref={ref2}>Exploring the
                            objects</h2>
                        <p className="pb-2">The first thing is too identify these objects. As stated
                            earlier,
                            they are entities on which you can take actions. A lot of things can happen when you create
                            an
                            object. Are all the fields required? Can you put empty spaces? can you use weird characters
                            "Ω√"?
                            Is there a limit in the number of characters? The problem of strings being too long is a
                            pretty
                            common one. Database have limits for the number of characters in a field, but the front end
                            will not always enforce it. Therefore, the data is sent to the back end, it crashes and
                            sends back an error... </p>
                        <p className="pb-4 font-semibold text-blue">Fill the example form with fake info to
                            continue.</p>
                        <h3 className="text-pink font-semibold pb-4" id="Creating objects" ref={ref3}>Creating
                            objects</h3>
                        <EntitiesForm setEntity={setEntity}/>
                        <section className="pt-4">
                            <p className="font-semibold pb-6">Saved objects</p>
                            <section className="pb-6">
                                <p className="font-bold text-pink">User</p>
                                <p className="pl-6 text-blue"><span
                                    className="font-semibold text-black">First name:</span> {entity ? entity.firstName : ""}
                                </p>
                                <p className="pl-6 text-blue"><span
                                    className="font-semibold text-black">Last name:</span> {entity ? entity.lastName : ""}
                                </p>
                                <p className="font-bold text-pink">Address</p>
                                <p className="pl-6 text-blue"><span
                                    className="font-semibold text-black">Street:</span> {entity ? entity.street : ""}
                                </p>
                                <p className="pl-6 text-blue"><span
                                    className="font-semibold text-black">Apartment #:</span> {entity ? entity.apt : ""}
                                </p>
                                <p className="pl-6 text-blue"><span
                                    className="font-semibold text-black">City:</span> {entity ? entity.city : ""}</p>
                            </section>
                            {entity && (
                                <>
                                    <section className="pt-2 flex flex-col space-y-2">
                                        <p>We have one form, but we can see that we created two separated objects. One
                                            user
                                            with a first and last name and an address with street, apartment number,
                                            and
                                            city.</p>
                                        <p>If you play around, you can notice a few things. There is no
                                            limit in the number
                                            of characters that you can enter inside each input. So if you want to type
                                            3000 characters into the input box, you can (It will work)! The only reason
                                            that
                                            it doesn't produce an error, is that in this application, there is no
                                            database
                                            saving this information. Otherwise, it is very
                                            likely we will run into some field constraint in the database, particularly
                                            for
                                            fields like city.</p>
                                        <p>When you do exploratory testing, it is important to know
                                            what
                                            kind of data a user will enter. For example the biggest name for a European
                                            city
                                            is 58 characters in Welch. Knowing this can help you set some good test
                                            cases.
                                            One that I often run into is 'middle name'. If you complete immigration
                                            paperwork
                                            this field often comes up. I have 2 middle names... Most of the time
                                            you can enter only one, which can be a problem for immigration paperwork...
                                            Errors while completing forms are not always handled very well.
                                        </p>
                                        <p>Often when an error occurs nothing is displayed to
                                            let the user know that the data was not saved. If there is an error display
                                            often no explanation is given to remedy the problem. So it is
                                            essential
                                            for the front end to be aware of the limitation of the back end to protect
                                            the users against potential failure.</p>
                                        <p>Another bug you may have found is that the form doesn't trim white spaces.
                                            You can
                                            currently enter white space in every field and it will let you save the data
                                            entered.</p>
                                    </section>
                                    <section className="py-4">
                                        <h3 className="text-pink font-semibold ">Updating objects</h3>
                                        <p className="pb-4 text-blue font-semibold">Now update the information you
                                            enter
                                            earlier.</p>
                                        <EntitiesForm setEntity={setEntity} originalEntities={entity}/>
                                        <p className="font-semibold py-2">Updated entities</p>
                                        {entity && (
                                            <section className="pb-4">
                                                <p className="font-bold text-pink">User</p>
                                                <p className="pl-6 text-blue"><span
                                                    className="font-semibold text-black">First name:</span> {entity.firstName}
                                                </p>
                                                <p className="pl-6 text-blue"><span
                                                    className="font-semibold text-black">Last name:</span> {entity.lastName}
                                                </p>
                                                <p className="font-bold text-pink">Address</p>
                                                <p className="pl-6 text-blue"><span
                                                    className="font-semibold text-black">Street:</span> {entity.street}
                                                </p>
                                                <p className="pl-6 text-blue"><span
                                                    className="font-semibold text-black">Apartment #:</span> {entity.apt}
                                                </p>
                                                <p className="pl-6 text-blue"><span
                                                    className="font-semibold text-black">City:</span> {entity.city}</p>
                                            </section>
                                        )}

                                        <section className="pt-2 flex flex-col space-y-2">
                                            <p>Now let's imagine that we want to update our objects. We can ensure that
                                                city and last name are still required. We can enter white space in every
                                                field and see that sadly it is still a bug because it is saving the
                                                empty
                                                space
                                                as values...</p>
                                            <p>Try to update the apartment field. Let's imagine that
                                                you recently move and are updating your address. You lived in an
                                                apartment
                                                complex and now you have a nice house. Ouch, what happened? It is
                                                telling me
                                                I can't do that. This is somewhat of a frequent issue.
                                                Systems are okay with blank fields when objects are created but they
                                                will
                                                refuse to overwrite a field with a Null if there is already data
                                                present.
                                                This is
                                                why exploratory testing is so important. The website is working
                                                correctly
                                                and
                                                giving you a correct error. But this goes against what the user wants to
                                                do. It
                                                is a case of wrong acceptance criteria. </p>
                                        </section>
                                    </section>
                                </>
                            )}
                            <section className="pb-10">
                                <h2 className="font-semibold text-2xl border-b border-grey-light pb-2 mb-4 pt-10"
                                    id="Moving-on-from-blame" ref={ref3}>Moving
                                    on from blame</h2>
                                <p>If you are a critic you could say that we don't need exploratory
                                    testing. We need the engineers
                                    to write more tests or better tests. I think it is true. But it is hard for
                                    engineers to think about all the possible cases. What also makes it complicated is
                                    that
                                    the engineers that created the form originally may not be the same ones that add
                                    the apartment field. Context gets lost all the
                                    time and tests are very useful to document functionality. Engineers will miss
                                    things because that is what humans do. When you build something you can't think
                                    about all the things that can go wrong. But what you can do is write new tests
                                    when bugs are reported to ensure that in the future this bug doesn't happen
                                    again. For example, someone found the bug that white space should be trim when
                                    submitting data. You can easily write a unit test for it and move on.</p>
                            </section>
                        </section>
                    </section>
                </section>
            </LayoutWrapper>
        </section>
    )
}