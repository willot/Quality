import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {Link, useLocation} from "react-router-dom";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useEffect} from "react";

export const ExploratoryTesting = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        document.title = 'Exploratory Testing';
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="bg-white-bg flex flex-row justify-center w-full">
            <LayoutWrapper section="exploratoryTesting" navigationTextButton="Interactions" navigationButtonLinkUrl="/interactions">
                <section className="bg-white-bg h-full text-black text-justify py-10 px-1">
                    <section className="pb-10">
                        <h2 className="font-bold">The Definition</h2>
                        <p className="indent-8"> "A style of software testing that emphasizes the personal freedom and
                            responsibility of the individual tester to continually optimize the quality of his/her work
                            by
                            treating test-related learning, test design, test execution, and test result interpretation
                            as
                            mutually supportive activities that run in parallel throughout the project."</p>
                        <p className="text-xs indent-8 pb-5">--Cem Kaner--</p>
                        <p>For me, exploratory testing is using the scientific method to gain insights into your
                            application and find potential problems. You make a hypothesis. You gather data. You assess
                            if your hypothesis holds or not. Then you use your results to create a new hypothesis.
                            This is how you "explore" your application/system. If you want to dig into this subject, I
                            recommend "Explore It!" by Elisabeth Hendrickson. Ultimately, how can you guarantee that the
                            system works if you haven't tested its edges?</p>
                    </section>
                    <section className="pb-10">
                        <h2 className="font-bold">Why is it useful?</h2>
                        <p>If you do not search for bugs, how do you find them? Checking that acceptance criteria are met
                            is not the same as checking for bugs. It only makes sure the work is done as expected. If you do not
                            try to move beyond just checking the acceptance criteria, then you are letting your users
                            find the bugs instead. If your users are the ones finding the bugs, you risk breaking their trust.
                            They will be more likely to use your competitors. It will also
                            increases the stress of your team. When a user reports a bug, the bug goes through
                            triage and gets prioritized. Since it is in production, someone will likely be asked to rush a fix instead of their normal work,
                            or, worse yet, get woken up in the middle of the night to solve it. The engineer is likely to receive
                            incomplete information about the bug. The person will have to try to gather more data to
                            understand what the bug is. At the same time, the manager will keep asking where we are with
                            the bug and when will it be fixed. Then the bug gets fixed and gets pushed. It distracted a
                            lot of people from their work, added a lot of stress, and was terribly inefficient. Let's
                            imagine the happy path. A QA or anybody in the team did some exploratory testing on the
                            stage environment and found an issue. A detailed ticket gets created and the product manager
                            decides to prioritize it or not. Then the ticket gets added to the board. The next engineer
                            available will pick the ticket on top of the board. The engineer will have all the
                            information needed to fix the bug and life go on. No pages, no manager asking when it will
                            be fixed, no engineer complaining that they don't have information to fix the bug. No
                            disturbance in the normal process.</p>
                    </section>
                    <section className="pb-10">
                        <h2 className="font-bold">What does exploratory testing add?</h2>
                        <p>For me, exploratory testing is putting yourself in the user's shoes. You become a user
                            advocate. How do I feel as a user? Does that really make sense? Is this confusing? Can I be
                            in a weird state if I do some action in a different order than expected? What can a user do
                            that we didn't think was possible, we didn't expect?</p>
                    </section>
                    <section>
                        <h2 className="font-bold">Basic rules:</h2>
                        <h3 className="text-pink font-semibold pt-4">The goal</h3>
                        <p>You need to have a goal when you do exploratory testing. Otherwise, you will just wander
                            aimlessly and not accomplish anything. It can be as simple as: "I want to test all the ways
                            to create a user". You may find issues that are not relative to your goal, you should note
                            them and come back later to it.</p>
                        <h3 className="text-pink font-semibold pt-4">The framework</h3>
                        <p>You need to set aside time for your exploration. I like to use an hour and a half to two
                            hours. More time and it becomes hard to stay focused. Less time, then you feel like you just
                            scratch the surface. I also like to set boundaries. I will only test on this browser or
                            iOS...</p>
                        <h3 className="text-pink font-semibold pt-4">The group</h3>
                        <p>I recommend to mob when doing exploratory testing. I find 4 people ideal but it is not a
                            hard-set rule. What I like about doing with other people is that you generate more ideas
                            about potential problems and you get more eyes looking at the screen. You also have more
                            people with knowledge of the system. This can help you create better hypotheses. You are
                            also more likely to catch things.</p>
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
                            <Link to="/environment" className="text-lg underline underline-offset-2 px-2">Application in
                                its
                                environment</Link>
                        </ul>

                    </section>
                </section>
            </LayoutWrapper>
        </div>
    )
}
