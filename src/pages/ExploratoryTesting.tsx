import {Link, useLocation} from "react-router-dom";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useEffect, useState} from "react";
import {ShowSectionHook} from "../hooks/ShowSectionHook";

export const ExploratoryTesting = () => {
    const {pathname} = useLocation();
    const [idVisible, setIdVisible] = useState("");
    const [clickedSection, setIsClickedSection] = useState(false);
    const {
        ref1,
        ref2,
        ref3
    } = ShowSectionHook(clickedSection, setIsClickedSection, setIdVisible, window, "Basic-rules");

    useEffect(() => {
        document.title = 'Exploratory Testing';
        window.scrollTo(0, 0);
        setIdVisible("The-Definition");
    }, [pathname]);

    return (
        <div className="bg-white-bg flex flex-row justify-center w-full">
            <LayoutWrapper page="exploratoryTesting" currentSection={idVisible} setCurrentSection={setIdVisible}
                           setIsClickedSection={setIsClickedSection}>
                <section className="bg-white-bg h-full text-black text-justify py-10 px-1">
                    <section className="pb-10">
                        <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref1}
                            id="The-Definition">The Definition</h2>
                        <p className="indent-8"> "A style of software testing that emphasizes the personal freedom and
                            responsibility of the individual tester to continually optimize the quality of his/her work
                            by
                            treating test-related learning, test design, test execution, and test result interpretation
                            as
                            mutually supportive activities that run in parallel throughout the project."</p>
                        <p className="text-xs indent-8 pb-5">--Cem Kaner--</p>
                        <p>For me, exploratory testing is using the scientific method to gain insights into your
                            application and find potential problems. You make an hypothesis. You gather data. You assess
                            if your hypothesis holds or not. Then you use your results to create a new hypothesis.
                            This is how you "explore" your application/system. If you want to dig into this subject, I
                            recommend "Explore It!" by Elisabeth Hendrickson. Ultimately, how can you guarantee that the
                            system works if you haven't tested its edges?</p>
                    </section>
                    <section className="pb-10">
                        <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref2}
                            id="Why-is-it-useful?">Why is it useful?</h2>
                        <p>If you don't actively search for bugs, how will you uncover them? Simply ensuring that
                            acceptance criteria are met doesn't equate to a thorough bug check. Relying solely on
                            acceptance criteria means you're leaving bug discovery to your users. This not only
                            jeopardizes their trust but also raises the likelihood of them turning to your
                            competitors.</p>

                        <p className="pb-4">Furthermore, this approach increases stress levels within your team. When a
                            user reports a
                            bug, it initiates a triage process and necessitates prioritization. This often leads to an
                            engineer diverting from their regular tasks, or in worse cases, being called in the middle
                            of the night to address it. The engineer may receive incomplete information about the bug
                            and have to spend extra time gathering data to understand its nature. Simultaneously,
                            managers may be pressing for updates on the bug's progress and expected resolution time.

                            Once the bug is fixed and deployed, the whole process consumes a considerable amount of time
                            and energy, causing distraction and stress, and ultimately proving highly inefficient.</p>
                        <p>
                            Let's envision the ideal scenario, commonly known as the 'happy path'. During exploratory
                            testing on the stage environment, a QA team member or a colleague identifies an issue. A
                            comprehensive ticket is then meticulously created, and the product manager assesses its
                            priority. Subsequently, the ticket is seamlessly integrated into the task board.

                            When the next available engineer selects the ticket from the top of the board, they find all
                            the necessary information to resolve the bug. The process proceeds smoothly, without any
                            late-night alerts, managers inquiring about the fix timeline, or engineers struggling due to
                            inadequate bug details. This ensures a disruption-free continuation of the normal
                            workflow.</p>
                    </section>
                    <section className="pb-10">
                        <p>To me, exploratory testing is about stepping into the user's perspective. It's a way of
                            advocating for the user. How would I, as a user, feel in this situation? Does the process
                            truly make sense? Is anything potentially confusing? Could I end up in a peculiar state if I
                            perform actions in an unexpected sequence? What unexpected actions or scenarios might a user
                            encounter that we didn't anticipate or consider?</p>
                    </section>
                    <section>
                        <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref3}
                            id="Basic-rules">Basic rules:</h2>
                        <h3 className="text-pink font-semibold pt-4">The goal</h3>
                        <p>When conducting exploratory testing, it's essential to have a clear objective in mind.
                            Without a defined goal, your testing efforts may become unfocused and unproductive. Your
                            goal can be as straightforward as 'I want to thoroughly test all the methods for creating a
                            user.'

                            During this process, you might encounter issues that aren't directly related to your
                            immediate goal. In such cases, it's advisable to make note of these issues for future
                            investigation. This allows you to stay on track with your current objective while ensuring
                            that you address these additional concerns at a later point.</p>
                        <h3 className="text-pink font-semibold pt-4">The framework</h3>
                        <p>It's crucial to allocate dedicated time for your exploration. I find that setting aside an
                            hour and a half to two hours is usually optimal. Any more than that, and maintaining focus
                            can become challenging. Conversely, if you allocate less time, you might feel like you've
                            only skimmed the surface.</p>

                        <p>Additionally, it's beneficial to establish boundaries. For instance, you might decide to
                            focus exclusively on testing within a specific browser or operating system, providing a
                            clear scope for your exploration.</p>
                        <h3 className="text-pink font-semibold pt-4">The group</h3>
                        <p>I highly recommend mob testing during exploratory sessions. While a group of four individuals
                            works well for me, it's not a strict requirement. One of the key advantages of collaborative
                            testing is the wealth of diverse perspectives. With more participants, you generate a
                            broader range of ideas about potential issues, and you benefit from multiple sets of eyes
                            scrutinizing the screen.</p>

                        <p>Additionally, having a team with varied levels of system knowledge enhances the quality of
                            your hypotheses. Moreover, with multiple people involved, you're more likely to catch subtle
                            nuances and potential problems that might otherwise go unnoticed.</p>
                    </section>
                    <section className="pt-10">
                        <p className="pb-2">We will explore these four concepts. They are based on the "Explore it!"
                            book</p>
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
