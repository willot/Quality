import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";

const boxStyle = {border: 'grey solid 2px', borderRadius: '10px', padding: '5px'};

export const States = () => {

    const DraggableBox = ({id}: any) => {
        const updateXarrow = useXarrow();
        return (
            // <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div id={id} className="border-2 border-red m-8">
                {id}
            </div>
            // </Draggable>
        );
    };

    return (
        <section className="bg-blue flex flex-row justify-center w-full">
            <section
                className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <Link to="/objects" className="flex flex-row items-center mt-10">
                    <ArrowLongLeftIcon className="text-pink h-16 w-16"/>
                    <span className="text-pink text-lg font-semibold w-52 pl-6">Back to objects</span>
                </Link>
                <h1 className="text-4xl font-medium pb-5">States and changing states</h1>
                <p>This is often where the weird bugs happen. The one that are hard to reproduce or even to understand.
                    Have you ever seen a website asking you not to click on the back button when they process a request.
                    This is a sign that you are currently in a transition between state. Going back is going to probably
                    interfere with your current process. Another example is with my Alexa. I asked to play music (which
                    default to amazon music) and then instantly asked her to play music on spotify. The result was a
                    mash up of 2 song playing at the same time... When I asked to stop only spotify stop. I tried to
                    make it stop amazon music but it didn't work. I had to unplug it. My guess is that the first
                    application (amazon music) got closed before it was open and it lost track of it. Clearly got in a
                    weird state that it was not suppose to. This highlight that some time you can get in weird cases
                    when transition are not handle correctly.</p>
                <section>
                    <p className="pt-4">Let's take the example of a real library. A user enter the building. Everybody
                        can
                        enter a library there are no requirement, no need to present a card or an ID. Then the user
                        wander around in the aisle and
                        pick a book. So now the book went from a state of being available to a transition state between
                        available and checked out. The book is not really available but if you ask the librarian or the
                        computer
                        it will tell you that the book is available and should be on the shelve. Now the user go to desk
                        and
                        officially ask to borrow the book. For this the user has to show who they are with library card.
                        The
                        user is kind of login now. The book is now finish its transition state and is officially
                        borrowed.
                        Then the user leave the building and is logged out.</p>

                    <div className="w-full h-80 border-4 border-pink rounded-xl mt-6"
                         aria-label="visual of the library example">
                        <span className="pl-4 pt-6 text-lg font-bold">Library</span>
                        <Xwrapper>
                            <div className="flex flex-row m-10 justify-between">
                                <div className="pl-4 pr-4" id="user1">User enter</div>
                                <div className="pl-4 pr-4" id="user2">user pick a book</div>
                                <div className="pl-4 pr-4" id="user3">User show ID</div>
                            </div>
                            <div className="flex flex-row m-10 justify-between">
                                <div className="pl-4 pr-4" id="book1">book is available</div>
                                <div className="pl-4 pr-4" id="book2">book in transition state</div>
                                <div className="pl-4 pr-4" id="book3">book still in transition state</div>
                            </div>

                            <div className="flex flex-row m-10 justify-between">
                                <div className="pl-4 pr-4" id="user4">User leave</div>
                                <div className="pl-4 pr-4" id="user5">User check out the book</div>
                            </div>
                            <div className="flex flex-row m-10 justify-between">
                                <div className="pl-4 pr-4" id="book4">book is checked out</div>
                                <div className="pl-4 pr-4" id="book5">book is being read</div>
                            </div>
                            <Xarrow start="user1" end="user2" color='lime'/>
                            <Xarrow start="user2" end="user3" color='lime'/>
                            <Xarrow start="user3" end="user5" color='lime'/>
                            <Xarrow start="user5" end="user4" color='lime'/>
                            <Xarrow start="book1" end="book2" color='orange'/>
                            <Xarrow start="book2" end="book3" color='orange'/>
                            <Xarrow start="book3" end="book5" color='orange'/>
                            <Xarrow start="book5" end="book4" color='orange'/>
                        </Xwrapper>
                    </div>
                    <section className="pt-4">
                        <p>If this process was happening in an application instead of the physical world. The action of
                            picking the book from the shelve and carrying it around would be replace by selecting a book
                            and placing it in a 'Cart'. The user would then be able to check out the book when done with
                            selecting books. If I was a tester, the transition state between available and checked out
                            is an area that I would focus on.</p>
                        <p className="font-semibold pt-4 pb-2">Lets imagine some scenarios:</p>
                        <ul>
                            <li>-If a user place a book in a cart but don't check it out yet. Can another user try
                                to put the book in their cart?
                            </li>
                            <li>-If a user place a book in a cart but never check it out. Can another user try to
                                put the book in their cart after some time?
                            </li>
                            <li>-If two users open the page for the same book around the same time and one of the
                                user put the book in their cart is the other user alerted that it cant select the
                                book for pick up or will it be able to put it in his cart.
                            </li>
                        </ul>
                    </section>
                </section>
                <section className="pt-4">
                    <p>These kind of tests are hard to automatize. You can write an end to end test for the process of
                        checking out books. But you can't write a test for every possible scenario. End to end tests are
                        long and hard to
                        write. They are harder to maintain, expensive and slow to run. They are also the most flaky
                        tests. This type of tests are usually focus on testing the "Happy path" meaning the path that
                        most of the users will take or the path that is the most important for your service/bottom line.
                        I am also not aware of any end to end test framework that let you run as two concurrent user.
                        This is where the exploratory testing again can be extremely valuable, and help find this very hard to
                        tests scenarios that can really negatively affect the users.</p>
                </section>
                <Link to="/ecoSystem" className="flex flex-row items-center pt-10">
                    <span className="text-pink text-lg font-semibold w-52">Software in a system</span>
                    <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                </Link>
            </section>
        </section>
    )
}