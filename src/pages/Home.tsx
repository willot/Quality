import {useState} from "react";
import {ExampleButton} from "../components/ExampleButton";
import {ExampleButtonNotAccessible} from "../components/ExampleButtonNotAccessible";


import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {xonokai} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

export const Home = () => {
    const [textDetails, setTextDetails] = useState("");


    const details = () => {
        if (textDetails === "") {
            return null;
        }
        if (textDetails === "button1") {
            return (
                <section>
                    Button1 follow all the requirements. But will a user expect a button to get more information?
                </section>
            )
        }
        if (textDetails === "button2") {
            return (
                <section>
                    Button2 follow all the requirements. But the wording of the button is confusing. Did you checked it
                    on mobile?
                    Is it too wide?
                </section>
            )
        }
        if (textDetails === "button3") {
            return (
                <section>
                    Button3 follow all the requirements. But the color contrast is hard to read.
                </section>
            )
        }
        if (textDetails === "buttonAccessibility") {
            return (
                <section>
                    Button4 fit all the acceptance criteria but it is not accessible... Try to select it by tabbing.
                </section>
            )
        }
    }

    const buttonText = (value: boolean): string => {
        return value ? "show less details" : "show more details";
    }

    const wrongWordingButtonText = (value: boolean): string => {
        return value ? "less details" : "details";
    }

    const test1 = `it('should change the text wording when the button is clicked', () => {
            render(<Home/>);
            const buttons = screen.getAllByRole('button');
            expect(buttons[0]).toContainHTML("show more details")
            click(buttons[0]);
            expect(buttons[0]).toContainHTML("show less details")
        });`;

    const test2 = `it('should show more info when the button is clicked', () => {
            render(<Home/>);
            const buttons = screen.getAllByRole('button');
            click(buttons[0]);
            const extraInfo = screen.queryByText("Button1 follow all the requirements. But will a user expect " +
                "a button to get more information?")
            expect(extraInfo).toBeInTheDocument();
        });
        `;

    const test3 = `it('should reset the wording of the button and change the text when clicking a second button', () => {
            render(<Home/>);
            const buttons = screen.getAllByRole('button');
            click(buttons[0]);
            expect(buttons[0]).toContainHTML("show less details");
            expect(buttons[2]).toContainHTML("show more details");
            click(buttons[2]);
            expect(buttons[2]).toContainHTML("show less details");
            expect(buttons[0]).toContainHTML("show more details");
            const extraInfo = screen.queryByText("Button3 follow all the requirements. But the color contrast is" +
                " hard to read.")
            expect(extraInfo).toBeInTheDocument();
        });`;

    const test4 = `it('should not show the information if the button is clicked again', () => {
            render(<Home/>);
            const buttons = screen.getAllByRole('button');
            click(buttons[0]);
            const extraInfo = screen.queryByText("Button1 follow all the requirements. But will a user expect " +
                "a button to get more information?")
            expect(extraInfo).toBeInTheDocument();
            click(buttons[0]);
            expect(extraInfo).not.toBeInTheDocument();
        });`

    return (
        <section
            className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
            <h1 className="text-4xl font-medium pb-5">What is quality?</h1>
            <section className="pb-10">
                <h2 className="font-bold">Dictionary definition:</h2>
                <p className="indent-8">The standard of something as measured against other things of a similar kind;
                    the degree od excellence of something</p>
                <p className="text-xs indent-8 pb-5">--Oxford Languages--</p>
                <p>It is not really useful, doesn't really tell us what is quality. What should I compare my website
                    too? Do I really want to match my competition? If I want to gain on them I want to be better.
                    Is being better have nothing to do with quality?</p>
            </section>
            <section className="pb-10">
                <h2 className="font-bold">Useful definition:</h2>
                <p className="indent-8">
                    "An essential requirement of these products is that they meet the needs of those members of society
                    who
                    will actually use them. This concept of fitness for use is universal. It applies to all goods and
                    services, without exception. The popular term for fitness for use is Quality, and our basic
                    definition
                    becomes: quality means fitness for use."
                </p>
                <p className="text-xs indent-8 pb-5">--Joseph Juran--</p>
                <p>
                    Basically we produce something the user want and meet their expectation. Quality is all about the
                    users
                    not about the requirements.
                </p>
                <p>
                    As a software engineer this is interesting. The quality of my work is in general base on me
                    completing
                    the requirements of my story, adding tests, passing all the previous tests and someone validating
                    the
                    work.
                    If I do that my story get accepted and push to prod.
                    But this definition is interesting because I can do all my work (write tests, pass tests, complete
                    requirements) and nonetheless produce bad quality.
                </p>
            </section>
            <section className="pb-10">
                <h2 className="font-bold">Lets look at this example</h2>
                <h3>The story:</h3>
                <section className="border-2 border-white p-2 m-2 rounded-xl">
                    <p className="pl-2">As a user I need to want to see more information. Make a button that the user
                        can click to see more information on quality</p>
                    <p className="pl-2 font-semibold">Acceptance criteria:</p>
                    <ul className="pl-4">-Information should appear below the button when clicked</ul>
                    <ul className="pl-4">-Text of the button should change after clicking on it</ul>
                    <ul className="pl-4">-Information should disappear if the user reclick the button</ul>
                </section>
                <section className="grid grid-rows-2 grid-flow-col justify-items-center md:grid-rows-1 pt-4">
                    <ExampleButton setTextDetails={setTextDetails} buttonId="button1" buttonWording={buttonText}
                                   css={"bg-pink text-blue w-28 border border-white rounded-md mb-2"}/>
                    <ExampleButton setTextDetails={setTextDetails} buttonId="button2"
                                   buttonWording={wrongWordingButtonText}
                                   css={"bg-pink text-blue w-48 border border-white rounded-md sm:w-28 mb-2"}/>
                    <ExampleButton setTextDetails={setTextDetails} buttonId="button3" buttonWording={buttonText}
                                   css={"bg-pink text-white w-28 border border-white rounded-md mb-2"}/>
                    <ExampleButtonNotAccessible setTextDetails={setTextDetails} buttonId="button3"
                                                buttonWording={buttonText}/>
                </section>
                <section className="text-red">
                    {details()}
                </section>
            </section>
            <section className="pb-4">
                I choose this four examples because they are impossible or hard to write tests for. Has an engineer
                I can write unit tests, integration tests and end to end tests. I can basically test the logic in the
                application and make sure the expected behaviors are happening. At least that is what I like to
                believe...
                But I can't test if it is what the users expect and I can't test what I didn't think about.
            </section>
            <section className="pt-10">
                <h2 className="font-bold">Let's look at the tests</h2>
                <p className="py-2">First test is very simple. Does the text in the button change when the user click on it? It tests for
                    the second requirement</p>
                <SyntaxHighlighter
                    language='javascript'
                    style={xonokai}
                    highlighter={"prism" || "hljs"}
                >
                    {test1}
                </SyntaxHighlighter>
                <p className="pb-2 pt-4">The second test is slightly more involved, it test the first requirement. Does extra information appears when the user click on the
                    button?</p>
                <SyntaxHighlighter
                    language='javascript'
                    style={xonokai}
                    highlighter={"prism" || "hljs"}
                >
                    {test2}
                </SyntaxHighlighter>
                <p className="pb-2 pt-4">The third test keep adding behavioral complexity. If the user click on a button and see the information and then click on
                another button does the text on the first button click change correctly? This test the a combination of
                all the requirement together</p>
                <SyntaxHighlighter
                    language='javascript'
                    style={xonokai}
                    highlighter={"prism" || "hljs"}
                >
                    {test3}
                </SyntaxHighlighter>
                <p className="pb-2 pt-4">The last test is focus on a single button behavior. Does extra information appears and then
                    disappears when the button is clicked again? This is the last requirement</p>
                <SyntaxHighlighter
                    language='javascript'
                    style={xonokai}
                    highlighter={"prism" || "hljs"}
                >
                    {test4}
                </SyntaxHighlighter>
                <section className="pt-10">
                    <p>These simple tests can seems useless. It is very easy to reproduce them quickly manually and
                    ensure that the functionality works correctly. Yes but it would be missing the point. The value of the tests is that
                    they can be repeated cheaply and at will. You can run them when committing, when pushing code...
                    They unsure that nothing new broke the current functionality. They also act as a documentation
                    of what is expected.</p>
                    <p className="pt-2">Nonetheless tests are not bullet proof. If I wanted to cover all possibility I could have wrote at least
                    15 more tests... Which at this point would be silly. To take an analogy that Elizabeth Hendrickson use
                    in her book "Explore It!". Test are a net, the more tests the tighter the weave are but you will always
                    have gaps.</p>
                    <p className="pt-2 text-pink font-semibold">For me one of the most important value of the tests that often get missed is that they remove the
                    tedious, boring, unimportant part of testing. These test give the time back to the professional tester
                    to do the important testing: usability testing, stress testing, accessibility testing, load testing and
                    EXPLORATORY testing! </p>
                </section>
            </section>
            <Link to="/exploratoryTesting" className="flex flex-row items-center pt-10">
                <span className="text-pink text-lg font-semibold w-52">Exploratory Testing</span>
                <ArrowLongRightIcon className="text-pink h-16 w-16"/>
            </Link>
        </section>
    )
}