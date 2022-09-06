import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

export const ExploratoryTesting = () => {

    return (
        <div className="bg-blue flex flex-row justify-center w-full">
            <section
                className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <Link to="/" className="flex flex-row items-center pt-10">
                    <ArrowLongLeftIcon className="text-pink h-16 w-16"/>
                    <span className="text-pink text-lg font-semibold w-52 pl-6">Quality</span>
                </Link>
                <h1 className="text-4xl font-medium pb-5">Exploratory testing </h1>
                <section className="pb-10">
                    <h2 className="font-bold">Exploratory testing definition?</h2>
                    <p className="indent-8"> "A style of software testing that emphasizes the personal freedom and
                        responsibility of the individual tester to continually optimize the quality of his/her work by
                        treating test-related learning, test design, test execution, and test result interpretation as
                        mutually supportive activities that run in parallel throughout the project."</p>
                    <p className="text-xs indent-8 pb-5">--Cem Kaner--</p>
                    <p>For me exploratory testing is using the scientific method to gain insight your application
                        and find potential problems. You make an hypothesis. You gather data and you assess if your
                        hypothesis
                        hold or doesn't. Then you use your result to create a new hypothesis. This is how you "explore"
                        your
                        application/system. if you want to really dig in this subject I recommend "Explore It!" by
                        Elisabeth
                        Hendrickson. Ultimately how can you guarantee that the system works if you didn't test its
                        edges.</p>
                </section>
                <section className="pb-10">
                    <h2 className="font-bold">Why is it useful?</h2>
                    <p>If you do not search for bugs how do you find them? Checking that acceptance criteria are mets
                        is not checking for bugs. It is just making sure the work is done as expected. If you do not try
                        to move behind just checking the acceptance criteria then you are letting your users find the
                        bugs.
                        If you let your users find the bug you risk to broke the trust of your users and they are more
                        likely
                        to use your competitors. Letting the users find the bugs also increase the stress of your team
                        because
                        someone report the bug. The bug go trough triage and get prioritize. Since it is in production
                        it is
                        very likely that someone will be ask to fix it quickly or someone on call will get a message.
                        The
                        engineer is likely to receive incomplete information about the bug. The person will have to try
                        to
                        gather more data to understand what is the bug. In the same time the manager will keep asking
                        where
                        are we with the bug and when it will be fixed. Then the bug get fixed and get pushed. It
                        distracted
                        a lot of people from their work, added a lot of stress and was terribly inefficient. Lets
                        imagine the
                        happy path. A QA do some exploratory testing on the stage environment and found an issue. A
                        detailed
                        ticket get created and the product manager decide to prioritize it or not. Then the ticket get
                        added
                        to the engineer queue. The next engineer to be done pick it up with all the information he needs
                        and
                        life go one. No pages, no manager asking when it will be fixed, no engineer complaining that
                        they
                        don't have information to fix the bug.</p>
                </section>
                <section className="pb-10">
                    <h2 className="font-bold">What does exploratory testing add?</h2>
                    <p>For me exploratory testing is putting yourself in the user shoes. You become a user advocate. How
                        do I feel as a user. Is that really make sense. Is this confusing? Can I be in a weird state if
                        I do
                        some action in a different order than expected? What can a user do that we didn't think was
                        possible
                        case, we didn't expect. </p>
                </section>
                <section>
                    <h2 className="font-bold">Basic rules:</h2>
                    <h3 className="text-pink font-semibold pt-4">The goal</h3>
                    <p>You need to have a goal when you do exploratory testing. Otherwise you will just wonder aimlessly
                        and not really accomplish anything. It can be as simple as: "I want to test all the way to
                        create a
                        user". You may find issues that are not relative to your goal, you should note them and comeback
                        later to it. </p>
                    <h3 className="text-pink font-semibold pt-4">The framework</h3>
                    <p>You need to set a side a time for your exploration. I like to use an hour and half to two hours.
                        More it become hard to stay focus and less you feel like yiu just scratch the surface. I also
                        like to
                        set boundaries like I will only test on this browser or iOS...</p>
                    <h3 className="text-pink font-semibold pt-4">The group</h3>
                    <p>I really recommend to mob when doing exploratory testing. I find 4 people ideal but it is not an
                        hard set rule. What I like about doing with other people is that you generate more idea about
                        potential
                        problems and you get more eyes looking at the screen. You also have more people with knowledge
                        of
                        the system this kind help you create better hypothesis You are more likely to catch things.</p>
                </section>
                <section>
                    <h2 className="font-bold pt-10">What do you need to focus on?</h2>
                    <p className="pb-2">These four sections are based on the "Explore it!" book</p>
                    <ul>
                        <Link to="/interactions" className="text-lg underline underline-offset-2 px-2">
                            Interactions
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/objects" className="text-lg underline underline-offset-2 px-2">Dealing with
                            Objects</Link>
                    </ul>
                    <ul>
                        <Link to="/states" className="text-lg underline underline-offset-2 px-2">States and changing
                            states</Link>
                    </ul>
                    <ul>
                        <Link to="/ecoSystem" className="text-lg underline underline-offset-2 px-2">Application in its
                            environment</Link>
                    </ul>

                </section>
                <Link to="/interactions" className="flex flex-row items-center pt-10">
                    <span className="text-pink text-lg font-semibold w-52">Learn more about interactions</span>
                    <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                </Link>
            </section>
        </div>
    )
}