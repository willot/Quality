import {useLocation} from "react-router-dom";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useEffect, useState} from "react";
import {ShowSectionHook} from "../hooks/ShowSectionHook";

export const Summary = () => {
    const {pathname} = useLocation();
    const [idVisible, setIdVisible] = useState("");
    const [clickedSection, setIsClickedSection] = useState(false);

    const {ref1, ref2} = ShowSectionHook(clickedSection, setIsClickedSection, setIdVisible, window, "When-to-use-exploratory-testing?");

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
                    <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref1} id="A-useful-tool">A useful tool</h2>
                    <p className="pb-4">Quality is not only meeting your user's expectations. It is also something that
                        makes
                        you stand out in a good way
                        or in a bad way. Ultimately to ensure the quality of your product you need to test it. For that,
                        you need a testing strategy.</p>
                    <p className="pb-4">Test automation is a required step in your testing strategy. It is the foundation
                        on which you can
                        build. It gives you confidence that your current application can be released to your users.
                        Tools like load
                        testing and usability testing can also be important depending on what is your product. But I
                        believe one of the most underused tools is
                        "exploratory testing". Exploratory testing is not writing a script and running it over and over
                        before
                        each release. These kinds of tests NEED to be automated tests. Exploratory testing is where you
                        probe
                        the potential cracks in your application. This lets you find bugs before your users. These bugs
                        get
                        fixed. Unit, integration or end-to-end tests get written to ensure that this bug never appears
                        again. Then you move on.</p>
                    <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4" ref={ref2} id="When-to-use-exploratory-testing?">When to use exploratory testing?</h2>
                    <p className="pb-4">I think it is up to each team to decide. For me, exploratory
                        testing is something that should happen every time concerns are raised about a part of the
                        application. A lot of teams do not have a QA person but that doesn't mean that you can't run
                        exploratory testing sessions. The person in charge of accepting stories can use exploratory
                        testing
                        to go beyond the simple acceptance criteria. You can also organize weekly sessions  and invite
                        different team members and guide them to show how exploratory testing let them
                    discover the limit of their application. </p>
                    <p>Exploratory testing is a tool. It is not meant to replace other types of testing. It is a
                        complement to
                        your
                        current process. Since it is manual it is often discarded or confused with simple manual
                        testing. It
                        is a tool that is worth learning because everybody can gain from it. Engineers getting better at
                        testing their own stories before they push them. The PMs, discovering more issues when accepting
                        stories.
                        The product owners gaining an understanding of the system at a deeper level.</p>
                </section>
            </LayoutWrapper>
        </section>
    )
}