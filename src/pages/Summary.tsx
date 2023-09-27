import {useLocation} from "react-router-dom";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useEffect, useState} from "react";
import {ShowSectionHook} from "../hooks/ShowSectionHook";

export const Summary = () => {
    const {pathname} = useLocation();
    const [idVisible, setIdVisible] = useState("");
    const [clickedSection, setIsClickedSection] = useState(false);

    const {
        ref1, ref2, ref3
    } = ShowSectionHook(clickedSection, setIsClickedSection, setIdVisible, window, "Examples-of-small-bugs-with-big-impact");

    useEffect(() => {
        document.title = 'Exploratory Testing-Summary';
        window.scrollTo(0, 0);
        setIdVisible("A-useful-tool");
    }, [pathname]);

    return (
        <section className="bg-white-bg flex flex-row justify-center h-screen  w-full">
            <LayoutWrapper page="summary" currentSection={idVisible} setCurrentSection={setIdVisible}
                           setIsClickedSection={setIsClickedSection}>
                <section className="bg-white-bg h-full text-black text-justify py-10 px-1">
                    <section>
                        <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref1}
                            id="A-useful-tool">A useful tool</h2>
                        <p className="pb-4">Quality is not solely about meeting user expectations; it's also about
                            distinguishing your product in a positive or negative light. To ensure a high-quality
                            product, a well-planned testing strategy is essential.</p>
                        <p className="pb-4">Test automation plays a pivotal role in your testing strategy, serving as
                            the foundational pillar on which to build confidence in your application's readiness for
                            release. Depending on your product, tools like load testing and usability testing can also
                            be significant. However, one often underutilized tool is "exploratory testing." Unlike
                            scripted tests, exploratory testing isn't about automating repetitive tasks. Instead, it
                            involves probing your application for potential weaknesses and vulnerabilities, enabling you
                            to uncover and address bugs before they impact your users. These discovered issues are then
                            rectified, and additional automated tests, such as unit, integration, or end-to-end tests,
                            are developed to prevent their recurrence, allowing your development process to progress
                            smoothly.</p>
                    </section>
                    <section>
                        <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref2}
                            id="When-to-use-exploratory-testing?">When to use exploratory testing?</h2>
                        <p className="pb-4">The decision of when to employ exploratory testing is ultimately left to
                            each team's discretion. In my view, exploratory testing should be conducted whenever
                            concerns arise about a specific aspect of the application. Even if your team lacks a
                            dedicated QA person, exploratory testing sessions can still be valuable. The individual
                            responsible for accepting stories can utilize exploratory testing to delve beyond the basic
                            acceptance criteria. Alternatively, consider organizing weekly sessions and inviting various
                            team members, guiding them through the process to demonstrate how exploratory testing can
                            help uncover the limits of the application. </p>
                        <p>It's important to understand that exploratory testing is a valuable tool intended to
                            complement, not replace, other forms of testing in your current process. While it is a
                            manual process, it should not be dismissed or mistaken for simple manual testing. Learning
                            how to use this tool can benefit everyone involved - engineers can become more adept at
                            testing their own stories before deployment, PMs can identify more issues during story
                            acceptance, and product owners can gain a deeper understanding of the system's
                            intricacies.</p>
                    </section>
                    <section>
                        <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref3}
                            id="Examples-of-small-bugs-with-big-impact">Examples of small bugs with big impact</h2>
                        <section className={'flex flex-col space-y-3'}>
                            <div>
                                <p>KFC in Germany sending messages to their users to commemorate KristallNacht...
                                    Difficult to do worst for your brand...</p>
                                <a className="text-blue underline underline-offset-2"
                                   href={"https://www.bbc.com/news/world-europe-63499057"}>Article</a>
                            </div>
                            <div>
                                <p>Last year Microsoft released a version of Microsoft team on Android that blocked
                                    calls to 911...
                                    Again not great for your image</p>
                                <a className="text-blue underline underline-offset-2"
                                   href={"https://www.androidpolice.com/microsoft-teams-android-911-update/"}>Article</a>
                            </div>
                            <div>
                                <p>A few years back Nest Thermostat released a bug that resulted in users not being able
                                    to
                                    use
                                    their heater.</p>
                                <a className="text-blue underline underline-offset-2"
                                   href={"https://www.theregister.com/2016/01/14/nest_foul_up/"}>Article</a>
                            </div>
                            <div>
                                <p>Los Angeles's new airport terminal opening in 2008 was also a good example</p>
                                <a className="text-blue underline underline-offset-2"
                                   href={"https://www.computerweekly.com/news/2240086013/British-Airways-reveals-what-went-wrong-with-Terminal-5"}>Article</a>
                            </div>
                        </section>
                    </section>
                </section>
            </LayoutWrapper>
        </section>
    )
}