import {Link} from "react-router-dom";
import {ArrowLongLeftIcon} from "@heroicons/react/24/solid";
import {ShoppingCartIcon} from "@heroicons/react/20/solid";
import {useState} from "react";

export const Interactions = () => {
    const [buttonIndex, setButtonIndex] = useState<string>("");

    const buttonMessage = () => {
        if (buttonIndex === "") {
            return null;
        }
        if (buttonIndex === "button1") {
            return "You are wrong there is no aria label. Someone using a screen reader would orly hear `button` and have" +
                "no idea what is this button for..."
        }
        if (buttonIndex === "button2") {
            return "You are correct there is a aria label, the outline is not deactivated and it is button not a div "
        }
        if (buttonIndex === "button3") {
            return "You are wrong the outline of the button is deactivated when the button is focus. So you don't know that" +
                "you are currently on the button when you tab around"
        }
        if (buttonIndex === "button4") {
            return "You are wrong this button is not a button and get ignore by screen reader."
        }
    }

    return (
        <section className="bg-blue flex flex-row justify-center w-full">
            <section
                className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <Link to="/exploratoryTesting" className="flex flex-row items-center mt-10">
                    <ArrowLongLeftIcon className="text-pink h-16 w-16"/>
                    <span className="text-pink text-lg font-semibold w-52 pl-6">Exploratory Testing</span>
                </Link>
                <h1 className="text-4xl font-medium pb-5">Interaction with your application</h1>
                <p>You know your application you use it everyday. But do you really know it. Did you ever try to do
                    things out of order? Did you try to use your keyboard instead of your mouse to navigate? Did you
                    try to use a screen reader?
                    When I explore an app I try to think like my kid and be curious. I try to act like I don't know
                    better.
                    This is a list of things you can do to try to change the way you interact with the application you
                    are exploring.
                </p>
                <section className="py-10">
                    <h2 className="font-bold">Play with the url</h2>
                    <p>Did you ever try to mess with the url. Click on the link below or better try to mess with the
                        url.
                        This is a simple app but sometimes the url contain ids or parameter. It is often a
                        good thing to try to mess with them and see what happen. See if the application break or if you
                        get
                        access to things you shouldn't be able to. It is an issue that you sometimes find is that your
                        application is secure but when you are log in you can sometimes take action for other user
                        because an
                        end point is not properly secure. Messing with a url is a simple way to try things. You can also
                        use
                        tools like postman</p>
                    <Link to="/blabla" className="flex flex-row items-center mt-2">
                        <span className="text-pink text-lg font-semibold w-52 pl-6">Link to /blabla</span>
                    </Link>
                </section>
                <section className="pb-10">
                    <h2 className="font-bold">Use your keyboard</h2>
                    <p>Lot of people use their keyboard to navigate into an application. Using a
                        keyboard can have a huge impact on your interaction with an application. These are example on
                        what
                        can go wrong when using a keyboard.</p>
                    <section className="pt-4">
                        <h3 className="font-medium">Lets play with tabbing. Try to tab through this buttons.</h3>
                        <section className="grid grid-rows-2 grid-flow-col justify-items-center md:grid-rows-1 pt-4">
                            <button tabIndex={0}
                                    className="bg-pink text-blue w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white">button
                                1
                            </button>
                            <button tabIndex={3}
                                    className="bg-pink text-blue w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white active:shadow-none">button
                                2
                            </button>
                            <button tabIndex={1}
                                    className="bg-pink text-blue w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white">button
                                3
                            </button>
                            <button tabIndex={2}
                                    className="bg-pink text-blue w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white">button
                                4
                            </button>
                        </section>
                        <p>As you can see the ordering of the button is not right. This is a frequent issue that the
                            tabbing doesn't always follow the expected flow.</p>

                        <p>Let's look at another example. Click or tab on the button you think you are correct</p>
                        <section className="grid grid-rows-2 grid-flow-col justify-items-center md:grid-rows-1 pt-4">
                            <button tabIndex={5}
                                    className="flex flex-row justify-center bg-pink text-blue w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white"
                                    onClick={() => {
                                        setButtonIndex("button1")
                                    }}>
                                <ShoppingCartIcon className="h-6 w-6"/>
                            </button>
                            <button aria-label="Shopping cart"
                                    tabIndex={5}
                                    className="flex flex-row justify-center bg-pink text-blue w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white "
                                    onClick={() => {
                                        setButtonIndex("button2")
                                    }}>
                                <ShoppingCartIcon className="h-6 w-6"/>
                            </button>
                            <button aria-label="Shopping cart"
                                    tabIndex={5}
                                    className="flex flex-row justify-center bg-pink text-blue w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white outline-0"
                                    onClick={() => {
                                        setButtonIndex("button3")
                                    }}>
                                <ShoppingCartIcon className="h-6 w-6"/>
                            </button>
                            <div tabIndex={5}
                                 className="flex flex-row justify-center bg-pink text-blue w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white"
                                 onClick={() => {
                                     setButtonIndex("button4")
                                 }}>
                                <ShoppingCartIcon className="h-6 w-6"/>
                            </div>
                        </section>
                        <section className="text-red">
                            {buttonMessage()}
                        </section>

                    </section>

                </section>
            </section>
        </section>
    )
}
