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
                        <p className="pb-2">The initial step is to identify these objects. As mentioned earlier, these
                            are entities upon which actions can be performed. When creating an object, various
                            considerations come into play. Are all fields mandatory, or can some be left blank? Can
                            special characters like "Ω√" be used? Additionally, is there a character limit for
                            input?</p>
                        <p>One common challenge arises from strings being excessively long. While databases have
                            limitations on the number of characters allowed in a field, the front end may not always
                            enforce these restrictions. Consequently, when data is sent to the back end, it may lead to
                            a crash and trigger an error response...</p>
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
                                        <p>While we have just one form, it's clear that we've actually created two
                                            distinct objects. The first object represents a 'user,' encompassing fields
                                            for both the first and last names. The second object represents an 'address'
                                            and includes fields for the street, apartment number, and city.</p>
                                        <p>If you experiment with the input fields, you'll notice something interesting.
                                            There's no enforced limit on the number of characters you can enter. So, if
                                            you wanted to type in a whopping 3000 characters, you could do so (and it
                                            would work)! The reason it doesn't generate an error is because, in this
                                            particular application, there's no database storing this information.
                                            However, in a real-world scenario, it's highly probable that we'd encounter
                                            field constraints in the database, especially for fields like 'city'.</p>
                                        <p>In exploratory testing, understanding the type of data users might input is
                                            crucial. For instance, the longest European city name,
                                            Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch, spans 58
                                            characters in Welsh. This knowledge aids in creating effective test cases.

                                            One common scenario involves the 'middle name' field. In immigration
                                            paperwork, this field often arises. Personally, I have two middle names, but
                                            most systems only allow for one entry. This limitation can pose challenges
                                            in such contexts.
                                        </p>
                                        <p>
                                            Additionally, it's important to acknowledge that the error handling process
                                            in form submissions may not always be user-friendly. In many cases, when an
                                            error occurs, there is no visible indication to alert the user that their
                                            data was not successfully saved. Even when an error message is displayed, it
                                            often lacks an explanation or guidance on how to rectify the issue.

                                            Therefore, it becomes imperative for the front-end system to be
                                            well-informed about the limitations of the back end. This awareness serves
                                            as a protective measure, ensuring a smoother user experience and
                                            safeguarding users against potential failures.</p>
                                        <p>Another issue that you might have encountered is that the form doesn't
                                            automatically remove leading or trailing white spaces from input fields.
                                            This means you can currently input white spaces in any field, and the system
                                            will accept and save the data as entered.</p>
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
                                            <p>Let's consider a scenario where we need to update our objects. We'll make
                                                sure that both the city and last name fields remain mandatory. However,
                                                if we attempt to input white spaces in every field, we'll observe that
                                                it still constitutes a bug. The system is erroneously saving the empty
                                                space as a valid value.</p>
                                            <p>Let's try updating the 'apartment' field. Imagine you've recently moved
                                                and you're in the process of updating your address. Previously, you
                                                lived in an apartment complex, but now you're living in a house.
                                                However, when you attempt to update the apartment field with an empty
                                                value, you encounter an unexpected error
                                                message. It informs you that you can't proceed with this change. This
                                                situation is not uncommon.

                                                Systems typically accept blank fields during object creation, but they
                                                often refuse to overwrite a field with a 'null' value if there's already
                                                existing data. This behavior underscores the importance of exploratory
                                                testing. While the website is functioning correctly and providing a
                                                valid error message, it may conflict with the user's intention. It's a
                                                case where the acceptance criteria may not align with user
                                                expectations.</p>
                                        </section>
                                    </section>
                                </>
                            )}
                            <section className="pb-10">
                                <h2 className="font-semibold text-2xl border-b border-grey-light pb-2 mb-4 pt-10"
                                    id="Moving-on-from-blame" ref={ref3}>Moving
                                    on from blame</h2>
                                <p>While it's valid to argue that we should rely less on exploratory testing and instead
                                    emphasize the creation of more comprehensive and robust automated tests, the reality
                                    is not always so straightforward. Engineers, no matter how skilled, may struggle to
                                    anticipate every conceivable scenario. Moreover, the original form creators may not
                                    be the same individuals tasked with later modifications, leading to a potential loss
                                    of context.</p>
                                <p>This is where tests truly shine, serving as invaluable documentation of
                                    functionality. Engineers are fallible, and it's human nature to overlook certain
                                    edge cases. When constructing something, it's nearly impossible to predict all
                                    potential pitfalls. However, what can be done is the establishment of new tests in
                                    response to reported bugs. This proactive approach helps prevent the recurrence of
                                    similar issues in the future. For instance, if someone identifies the bug related to
                                    whitespace not being trimmed during data submission, it can be promptly addressed
                                    with the creation of a targeted unit test, ensuring the issue is resolved and
                                    safeguarding against its reoccurrence.</p>
                            </section>
                        </section>
                    </section>
                </section>
            </LayoutWrapper>
        </section>
    )
}