import {Link, useLocation} from "react-router-dom";
import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useEffect} from "react";

export const Summary = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section className="bg-white-bg flex flex-row justify-center w-full">
            <LayoutWrapper>
                <section className="bg-white-bg h-full text-black text-justify py-10 px-1">
                    <h1 className="text-4xl font-medium pb-5 text-pink">Summary</h1>
                    <p className="pb-4">Quality is not only meeting your user expectation. It is also something that
                        make
                        you stand out in a good way
                        or in a bad way. Ultimately to ensure the quality of your product you need to test it. For that
                        you
                        need a testing strategy.</p>
                    <p className="pb-4">Test automation is a require step in your testing strategy. It is the foundation
                        on
                        which you can
                        build. It gives you confidence that your current application can be released to your users.
                        Tools
                        like load
                        testing and usability testing can also be important depending of what is your product. But I
                        believe
                        one of the most under used tool is
                        "exploratory testing". Exploratory testing is not writing a script and run it over and over
                        before
                        each release. These kind of tests are for automated tests. Exploratory testing is where you
                        probe
                        the potential cracks in your application. This let you find bug before your users. These bugs
                        get
                        fixed. Unit, integration or end to end tests get written to ensure that this bug never appear
                        again.
                        Then you move on.</p>
                    <p className="pb-4">When should you do exploratory testing? I think it is up to each team to decide.
                        For
                        me exploratory
                        testing is something that should happen everytime concerned are raised about a part of the
                        application. A lot of team do not have a QA person but that doesn't mean that you can't run
                        exploratory testing sessions. The person in charge of accepting stories can use exploratory
                        testing
                        to go beyond the simple acceptance criteria. You can also organize weekly session and invite
                        different team members and guide them to show how exploratory testing let them
                        discover the limit of their application. </p>
                    <p>Exploratory is a tool. It is not meant to replace other type of testing. It is a complement to
                        your
                        current process. Since it is manual it is often discarded or confused with simple manual
                        testing. It
                        is a tool that is worth learning because everybody can gain from it. Engineers getting better at
                        testing their own story before they push it. The PMs discovering more issues when accepting
                        stories.
                        The product owners gaining understanding the system at a deeper level.</p>

                    <Link to="/" className="flex flex-row items-center pt-4">
                        <span className="text-pink text-lg font-semibold w-52">Back to the start</span>
                        <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                    </Link>
                </section>
            </LayoutWrapper>
        </section>
    )
}