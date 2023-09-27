import {useEffect, useState} from "react";
import {ExampleButton} from "../components/ExampleButton";
import {ExampleButtonNotAccessible} from "../components/ExampleButtonNotAccessible";
import {ShowSectionHook} from "../hooks/ShowSectionHook";

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {nightOwl} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useLocation} from "react-router-dom";

export const Quality = () => {
    const [textDetails, setTextDetails] = useState("");
    const [idVisible, setIdVisible] = useState("");
    const [clickedSection, setIsClickedSection] = useState(false);

    // hook to find where the user is located in this page
    const {
        ref1,
        ref2,
        ref3,
        ref4,
        ref5
    } = ShowSectionHook(clickedSection, setIsClickedSection, setIdVisible, window, "Value-of-tests");

    const {pathname} = useLocation();
    useEffect(() => {
        document.title = 'Quality';
        window.scrollTo(0, 0);
        setIdVisible("Dictionary-definition")
    }, [pathname]);

    const details = () => {
        if (textDetails === "") {
            return null;
        }
        if (textDetails === "button1") {
            return (
                <section>
                    Button 1 follows all the requirements, but will a user expect a button to get more information?
                    Should it be a link to a help page?
                </section>
            )
        }
        if (textDetails === "button2") {
            return (
                <section>
                    Button 2 follows all the requirements, but the wording of the button is confusing. Did you check it
                    on mobile?
                    Is it too wide?
                </section>
            )
        }
        if (textDetails === "button3") {
            return (
                <section>
                    Button 3 follows all the requirements, but the color contrast is hard to read.
                </section>
            )
        }
        if (textDetails === "button4") {
            return (
                <section>
                    Button 4 fits all the acceptance criteria, but it is not accessible... Try to select it by tabbing.
                </section>
            )
        }
    }

    const buttonText = (value: boolean): string => {
        return value ? "show less details" : "Show more details";
    }

    const wrongWordingButtonText = (value: boolean): string => {
        return value ? "less details" : "details";
    }

    const test1 = `it('should change the text wording when the button is clicked', () => {
            render(<Home/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button', {name: "Show more details"});
            
            click(buttons[0]);
            expect(buttons[0]).toContainHTML("show less details")
        });`;

    const test2 = `it('should show more info when the button is clicked', () => {
            render(<Home/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button', {name: "Show more details"});
            const extraInfo = screen.queryByText("Button 1 follows all the 
            requirements, but will a user expect a button to get more information?
             Should it be a link to a help page?")
             
            click(buttons[0]);
            expect(extraInfo).toBeInTheDocument();
        });
        `;

    const test3 = ` it('should reset the wording of the button and change the text when clicking a second button', () => {
            render(<Home/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button', {name: "Show more details"});
            
            click(buttons[0]);
            expect(buttons[0]).toContainHTML("show less details");
            
            click(buttons[1]);
            expect(buttons[1]).toContainHTML("show less details");
            expect(buttons[0]).toContainHTML("Show more details");
            
            const extraInfo = screen.queryByText("Button 3 follows all the requirements," +
                " but the color contrast is hard to read.")
            expect(extraInfo).toBeInTheDocument();
        });`;

    const test4 = `it('should not show the information if the button is clicked again', () => {
            render(<Home/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button', {name: "Show more details"});
            click(buttons[0]);
            const extraInfo = screen.queryByText("Button 1 follows all the requirements, 
            but will a user expect a button to get more information?
             Should it be a link to a help page?")
             
            expect(extraInfo).toBeInTheDocument();
            click(buttons[0]);
            expect(extraInfo).not.toBeInTheDocument();
        });`

    return (
        <LayoutWrapper page="quality" currentSection={idVisible} setCurrentSection={setIdVisible}
                       setIsClickedSection={setIsClickedSection}>
            <section className="bg-white-bg h-full text-black text-justify py-10 px-1">
                <section className="pb-10">
                    <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Dictionary-definition"
                        ref={ref1} data-key={1}>Dictionary
                        definition:</h2>
                    <blockquote className="indent-8">The standard of something as measured against other things of a
                        similar
                        kind;
                        the degree of excellence of something
                    </blockquote>
                    <cite className="text-xs indent-8">--Oxford Languages--</cite>
                    <p className="pt-4">This definition is not really useful. It doesn't tell us what quality is. What
                        should I compare
                        my website to? Is my goal to match my competition if I want to be the best? Does being the best
                        mean being the standard for quality?</p>
                </section>
                <section className="pb-10">
                    <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Useful-definition"
                        ref={ref2} data-key={2}>Useful definition:</h2>
                    <blockquote className="indent-8">
                        "An essential requirement of these products is that they meet the needs of those members of
                        society
                        who will actually use them. This concept of fitness for use is universal. It applies to all
                        goods
                        and services, without exception. The popular term for fitness for use is Quality, and our basic
                        definition becomes: quality means fitness for use."
                    </blockquote>
                    <cite className="text-xs indent-8">--Joseph Juran--</cite>
                    <p className="pt-4">
                        Essentially, our aim is to create products that not only meet the defined requirements but also
                        align with the user's needs and expectations. Quality, as defined by Joseph Juran, boils down to
                        'fitness for use.' It emphasizes that the true measure of quality lies in how well it serves the
                        end-users, rather than just adhering to technical specifications.</p>

                    <p>In my role as a software engineer, I often gauge the quality of my work by ensuring I've met the
                        story's requirements, written thorough tests, passed existing tests, and had my work validated.
                        This process typically leads to the acceptance and deployment of my work. However, Juran's
                        definition adds an important layer of consideration: even if I meticulously complete all
                        technical aspects, the quality of my work ultimately hinges on whether it meets the user's
                        expectations and needs.
                    </p>
                </section>
                <section className="pb-10">
                    <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Example" ref={ref3}
                        data-key={3}>Example</h2>
                    <h3>The story:</h3>
                    <section className="border-2 border-pink p-2 m-2 rounded-xl">
                        <p className="pl-2">As a user, I want to see more information about quality. Make a button that
                            the
                            user can click to see more information on quality</p>
                        <p className="pl-2 font-semibold">Acceptance criteria:</p>
                        <ul className="pl-4">-Information should appear below the button when clicked</ul>
                        <ul className="pl-4">-Text of the button should change after clicking on it</ul>
                        <ul className="pl-4">-Information should disappear if the user re-clicks the button</ul>
                    </section>
                    <p>Click on the button below to see how they implement the story:</p>
                    <section className="grid grid-rows-2 grid-flow-col justify-items-center md:grid-rows-1 pt-4">
                        <ExampleButton setTextDetails={setTextDetails} buttonId="button1" buttonWording={buttonText}
                                       css={"bg-pink font-semibold text-white w-28 border border-white rounded-md mb-2 active:translate-y-0.5 duration-200 active:bg-blue hover:bg-blue"}/>
                        <ExampleButton setTextDetails={setTextDetails} buttonId="button2"
                                       buttonWording={wrongWordingButtonText}
                                       css={"bg-pink font-semibold text-white w-36 border border-white rounded-md sm:w-28 mb-2 active:translate-y-0.5 duration-200 active:bg-blue hover:bg-blue"}/>
                        <ExampleButton setTextDetails={setTextDetails} buttonId="button3" buttonWording={buttonText}
                                       css={"bg-pink font-semibold text-red w-28 border border-white rounded-md mb-2 active:translate-y-0.5 duration-200 active:bg-blue hover:bg-blue"}/>
                        <ExampleButtonNotAccessible setTextDetails={setTextDetails} buttonId="button4"
                                                    buttonWording={buttonText}/>
                    </section>
                    <section className="text-green font-semibold">
                        {details()}
                    </section>
                </section>
                <section className="pb-4">
                    I chose these four examples because they are impossible or hard to write tests for. As an engineer,
                    I can write unit, integration, and end-to-end tests for the ticket acceptance criteria. I can test
                    the basic logic in the application and make sure the expected behaviors are happening. At least,
                    that is what I like to believe... But I can't test if it is what the users expect, and I can't test
                    what I didn't think about..
                </section>
                <section className="pt-4 pb-6">
                    <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Tests" ref={ref4}
                        data-key={4}>Tests</h2>
                    <p className="py-2">The first test is very simple. Does the text in the button change when the user
                        clicks on
                        it? It tests for
                        the second requirement.</p>
                    <SyntaxHighlighter
                        language='javascript'
                        style={nightOwl}
                        highlighter={"prism" || "hljs"}
                        wrapLines={true}
                    >
                        {test1}
                    </SyntaxHighlighter>
                    <p className="pb-2 pt-4">The second test is slightly more involved. It tests the first requirement:
                        Does
                        extra information appears when the user clicks on the
                        button?</p>
                    <SyntaxHighlighter
                        language='javascript'
                        style={nightOwl}
                        highlighter={"prism" || "hljs"}
                        wrapLines={true}
                    >
                        {test2}
                    </SyntaxHighlighter>
                    <p className="pb-2 pt-4">The third test keeps adding behavioral complexity. If the user clicks on a
                        button
                        and sees the information and then clicks on
                        another button, does the text on the first button clicked change correctly? This test is a
                        combination of all the requirements together.</p>
                    <SyntaxHighlighter
                        language='javascript'
                        style={nightOwl}
                        highlighter={"prism" || "hljs"}
                        wrapLines={true}
                    >
                        {test3}
                    </SyntaxHighlighter>
                    <p className="pb-2 pt-4">The last test is focused on a single button behavior: Does extra
                        information
                        appear when a button is clicked and then
                        disappear when the button is clicked again? This is the last requirement.</p>
                    <SyntaxHighlighter
                        language='javascript'
                        style={nightOwl}
                        highlighter={"prism" || "hljs"}
                        wrapLines={true}
                    >
                        {test4}
                    </SyntaxHighlighter>
                    <section className="pt-10">
                        <p>
                            At first glance, these simple tests might appear trivial. They're easily reproducible
                            manually and serve to validate the functionality. However, dismissing them on these grounds
                            would be missing their true significance. The real value lies in their repeatability, which
                            eliminates the need for developers or QA teams to invest time in redundant manual checks.
                            This efficiency streamlines the acceptance process for deployment. These tests can be
                            executed upon code commits or pushes, ensuring that new changes don't disrupt existing
                            functionality. Moreover, they serve as living documentation of expected behavior,
                            functioning as regression tests.
                        </p>

                        <p className="pt-2"> Yet, it's important to acknowledge that tests aren't foolproof. Attempting
                            to cover every conceivable scenario would result in an impractical number of tests. To
                            borrow an analogy from Elizabeth Hendrickson's book, 'Explore It!': Tests act as a net, with
                            more tests creating tighter weaves. However, there will always be some gaps in coverage
                        </p>
                        <h2 className="font-bold pt-10 text-2xl border-b border-grey-light pb-2 mb-4"
                            id="Value-of-tests" ref={ref5} data-key={5}>Value of tests</h2>
                        <p className="pt-2 text-pink font-semibold">To me, one of the paramount advantages of automated
                            tests, often overlooked, is their ability to eliminate the tedious and less critical aspects
                            of quality control. By taking on these routine checks, automated tests free up valuable time
                            for professional testers to focus on indispensable forms of testing: usability assessments,
                            stress testing, accessibility evaluations, load testing, and, of course, the invaluable
                            exploratory testing!</p>
                    </section>
                </section>
            </section>
        </LayoutWrapper>
    )
}
