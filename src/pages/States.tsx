import {useLocation} from "react-router-dom";
import Xarrow, {Xwrapper} from "react-xarrows";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useEffect, useState} from "react";
import {ShowSectionHook} from "../hooks/ShowSectionHook";


export const States = () => {
    const {pathname} = useLocation();
    const [idVisible, setIdVisible] = useState("");
    const [clickedSection, setIsClickedSection] = useState(false);

    const {ref1, ref2, ref3} = ShowSectionHook(clickedSection, setIsClickedSection, setIdVisible, window, "Hot-take");

    useEffect(() => {
        document.title = 'Exploratory Testing-States';
        window.scrollTo(0, 0);
        setIdVisible("What-is-a-state?");
    }, [pathname]);

    return (
        <section className="bg-white-bg flex flex-row justify-center w-full">
            <LayoutWrapper page="states" currentSection={idVisible} setCurrentSection={setIdVisible}
                           setIsClickedSection={setIsClickedSection}>
                <section className="bg-white-bg h-full text-black text-justify py-10 px-1 flex flex-col space-y-2">
                    <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="What-is-a-state?"
                        ref={ref1}>What is a state?</h2>
                    <p>Weird bugs often stem from actions occurring at times they shouldn't. They're typically elusive,
                        hard to replicate, and even harder to comprehend. Have you ever encountered a website urging you
                        not to click the back button while a request is processing? This is a clear indicator that
                        you're in a transitional phase between states, and going back could potentially disrupt the
                        ongoing process </p>
                    <p> A personal instance of such a bug occurred with my Amazon Echo. I requested it to play music,
                        which defaulted to Amazon Music, and promptly followed up with a request to play music on
                        Spotify. The outcome was a peculiar mishmash of two songs playing simultaneously. When I said
                        "stop," only Spotify ceased playing. Despite my attempts to halt Amazon Music, it persisted. In
                        the end, I had to resort to unplugging my Echo. My speculation is that Spotify initiated before
                        the Amazon Music app fully launched, leading the system into an aberrant state with both
                        applications running concurrently. Clearly, it had ventured into a state it wasn't meant to be
                        in. This serves as a reminder that mishandling transitions can lead to unforeseen and anomalous
                        scenarios.</p>
                    <section>
                        <h2 className="font-bold pt-10 text-2xl border-b border-grey-light pb-2 mb-4" id="Example"
                            ref={ref2}>Example</h2>
                        <p>Let's illustrate this with a visit to a physical library. Upon entering the building, anyone
                            can step in; there are no prerequisites, no need for a card or an ID. The user then roams
                            the aisles and selects a book. At this point, the book undergoes a shift, moving from an
                            available state to a transitional phase that hovers between 'available' and 'checked out'.
                            It's not strictly available, yet if one were to inquire with the librarian or check the
                            computer system, it would indicate that the book should be on the shelf.</p>
                        <p>Next, the user proceeds to the front desk and formally requests to borrow the book. This
                            necessitates presenting a library card, akin to a form of authentication or 'logging
                            in'.The book has now completed its transition and is officially 'checked out'.</p>
                        <p>Finally, as the user exits the building, it's akin to a 'log out' process, symbolizing
                            the end of the borrowing session.</p>

                        {window.innerWidth > 500 &&
                        <div className="w-full h-fit border-2 border-pink rounded-xl pt-8 mt-4"
                             aria-label="visual of the library example">
                            <span className="pl-10 text-lg font-bold">Library</span>
                            <Xwrapper>
                                <div className="flex flex-row m-8 justify-between">
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="user1">User enter</div>
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="user2">user pick a book
                                    </div>
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="user3">User show ID</div>
                                </div>
                                <div className="flex flex-row m-8 justify-between">
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="book1">book is available
                                    </div>
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="book2">book in transition
                                        state
                                    </div>
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="book3">book still in
                                        transition state
                                    </div>
                                </div>

                                <div className="flex flex-row m-8 justify-between">
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="user4">User leave</div>
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="user5">User check out the
                                        book
                                    </div>
                                </div>
                                <div className="flex flex-row m-8 justify-between">
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="book4">book is checked out
                                    </div>
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="book5">book is being read
                                    </div>
                                </div>
                                <Xarrow start="user1" end="user2" color='lime'/>
                                <Xarrow start="user2" end="user3" color='lime'/>
                                <Xarrow start="user3" end="user5" color='lime' _cpx1Offset={150} curveness={0.5}/>
                                <Xarrow start="user5" end="user4" color='lime'/>
                                <Xarrow start="book1" end="book2" color='orange'/>
                                <Xarrow start="book2" end="book3" color='orange'/>
                                <Xarrow start="book3" end="book5" color='orange' _cpx1Offset={150} curveness={0.3}/>
                                <Xarrow start="book5" end="book4" color='orange'/>
                            </Xwrapper>
                        </div>}
                        <section className="pt-4">
                            <p>Let's envision this process unfolding within an application rather than the physical
                                world. The act of selecting a book from the shelf and carrying it around can be likened
                                to the digital action of choosing a book and placing it into a virtual 'Cart'. When the
                                user is ready to proceed, they can check out the book by navigating to their cart and
                                clicking 'Check Out'. As a tester evaluating such an application, I'd be particularly
                                interested in examining the transitional phase that occurs between a book being
                                'available' and 'checked out'.</p>
                            <h3 className="font-medium pt-4 pb-2">Exploring Intriguing Scenarios:</h3>
                            <ul>
                                <li>-If a user adds a book to their cart but doesn't proceed to check it out, can
                                    another user attempt to place the same book in their own cart?
                                </li>
                                <li>-What happens if a user places a book in their cart but delays checking out for
                                    hours or even days without logging out? Can another user attempt to add the same
                                    book to their cart after some time has elapsed?
                                </li>
                                <li>-In a scenario where two users access the page for the same book at nearly the same
                                    time and one user adds the book to their cart, will the other user be promptly
                                    alerted that the book is no longer available, or will they still have the option to
                                    add it to their cart?
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section>
                        <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4 pt-10" id="Hot-take"
                            ref={ref3}>Hot take</h2>
                        <p>These types of tests can be challenging to automate. While it's possible to write an
                            end-to-end test for the book checkout process, covering every conceivable scenario is
                            impractical. End-to-end tests are time-consuming to create, challenging to maintain,
                            expensive to execute, and often slower than other testing methods. They can also fail
                            unexpectedly for unforeseen reasons. Typically, these tests are designed to focus on the
                            'Happy path,' which represents the most common user journey or the path critical to your
                            service's success and bottom line.</p>
                        <p>Additionally, I'm not aware of any end-to-end test framework that allows for concurrent user
                            interactions. This is where exploratory testing shines, as it can be exceptionally valuable
                            in uncovering these difficult-to-test bugs that have the potential to significantly impact
                            users.</p>
                    </section>
                </section>
            </LayoutWrapper>
        </section>
    )
}