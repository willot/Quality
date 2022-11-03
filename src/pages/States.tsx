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
                    <p>Weird bugs are often caused by actions happening at times when they should not. They are usually
                        hard to reproduce or even to understand.
                        Have you ever seen a website asking you not to click on the back button when they process a
                        request?
                        This is a sign that you are currently in a transition between states. Going back is going to
                        probably
                        interfere with your current process. </p>
                    <p> An example of this kind of bug happened with my Amazon
                        Echo. I
                        asked to play music (which defaults to Amazon Music) and then instantly asked to play music on
                        Spotify. The result was a
                        mash-up of 2 songs playing at the same time... When I said "stop", only Spotify stopped. I tried
                        to
                        make it stop Amazon Music but it didn't work. I had to unplug it my Echo. My guess is that
                        Spotify got
                        opened
                        before the Amazon Music app finished launching, putting the system in a weird state where two
                        applications
                        were
                        running at once. Clearly, it got into a weird state that it was not supposed to. This highlight
                        that
                        sometimes you can get into weird cases when transition are not handled correctly.</p>
                    <section>
                        <h2 className="font-bold pt-10 text-2xl border-b border-grey-light pb-2 mb-4" id="Example"
                            ref={ref2}>Example</h2>
                        <p>Let's take the example of a real library. A user enter the building.
                            Everybody
                            can
                            enters a library there are no requirements, and no need to present a card or an ID. Then the
                            user
                            wanders around in the aisle and
                            picks a book. So now the book went from a state of being available to a transition state
                            between
                            available and checked out. The book is not really available but if you ask the librarian or
                            the
                            computer it will tell you that the book is available and should be on the shelf. Now the
                            user
                            goes to the front desk and officially asks to borrow the book. To do this the user has to
                            show
                            who
                            they are with a library card. The user is kind of login now. The book has now finished its
                            transition
                            state and is officially borrowed.
                            Then the user leaves the building and is logged out.</p>

                        {window.innerWidth > 500 &&
                        <div className="w-full h-fit border-2 border-pink rounded-xl pt-8 mt-4"
                             aria-label="visual of the library example">
                            <span className="pl-10 text-lg font-bold">Library</span>
                            <Xwrapper>
                                <div className="flex flex-row m-8 justify-between">
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="user1">User enter</div>
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="user2">user pick a book</div>
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="user3">User show ID</div>
                                </div>
                                <div className="flex flex-row m-8 justify-between">
                                    <div className="pl-2 pr-2 w-28 text-left my-auto" id="book1">book is available</div>
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
                            <p>Let's imagine this process happening in an application instead of the physical world. The
                                action of picking the book from the shelve and carrying it around would be replaced by
                                selecting a
                                book and placing it into a 'Cart'. The user would then be able to check out the book when
                                finished by going into their cart and clicking 'check out'. If I was testing such an
                                application,
                                the transition state between available and checked out is an area where I would focus
                                on.</p>
                            <h3 className="font-medium pt-4 pb-2">Interesting scenarios:</h3>
                            <ul>
                                <li>-If a user places a book in a cart but doesn't check it out yet. Can another user
                                    try
                                    to put the book in their cart?
                                </li>
                                <li>-If a user places a book in a cart but doesn't check it out for hours or days and
                                    doesn't log out. Can another user try to put the book in their cart after some time?
                                </li>
                                <li>-If two users open the page for the same book around the same time and one of the
                                    user put the book in their cart is the other user alerted that it can't select the
                                    book any more or will it be able to put it in his cart?
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section>
                        <h2 className="font-bold text-2xl border-b border-grey-light pb-2 mb-4 pt-10" id="Hot-take"
                            ref={ref3}>Hot take</h2>
                        <p>These kind of tests can be are hard to automatize. You can write an end-to-end test for the process
                            of
                            checking out books. But you can't write a test for every possible scenario. End-to-end tests
                            are
                            long to write. They are harder to maintain They are also expensive and slow to run. They are
                            more likely to sometime fail for unseen reasons. This type of test is
                            usually
                            focused on testing the "Happy path". Meaning the path that
                            most of the users will take or the path that is the most important for your service/bottom
                            line.
                            I am also not aware of any end-to-end test framework that let you run as two concurrent
                            users.
                            This is where the exploratory testing again can be extremely valuable, and help find these
                            very hard to tests bugs that can really negatively affect the users.</p>
                    </section>
                </section>
            </LayoutWrapper>
        </section>
    )
}