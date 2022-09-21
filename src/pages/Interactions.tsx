import {Link, useLocation} from "react-router-dom";
import {ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {ShoppingCartIcon} from "@heroicons/react/20/solid";
import {useEffect, useState} from "react";
import {LayoutWrapper} from "../components/LayoutWrapper";

export const Interactions = () => {
    const [buttonIndex, setButtonIndex] = useState<string>("");

    const {pathname} = useLocation();
    useEffect(() => {
        document.title = 'Exploratory Testing-Interactions';
        window.scrollTo(0, 0);
    }, [pathname]);

    const buttonMessage = () => {
        if (buttonIndex === "") {
            return null;
        }
        if (buttonIndex === "button1") {
            return "You are incorrect, there is no aria-label. Someone using a screen reader would only hear `button` and have no idea what is this button for..."
        }
        if (buttonIndex === "button2") {
            return "You are correct there is a aria-label, the outline is not deactivated and it is a button not a div."
        }
        if (buttonIndex === "button3") {
            return "You are incorrect the outline of the button is deactivated when the button is focus. So you don't know that" +
                " you are currently on the button when you tab around"
        }
        if (buttonIndex === "button4") {
            return "You are incorrect, this button is not a button and gets ignored by a screen reader."
        }
    }

    return (
        <section className="bg-white-bg flex flex-row justify-center w-full">
            <LayoutWrapper section="">
                <section
                    className="bg-white-bg h-full text-black text-justify py-10 px-1">
                    <h1 className="text-4xl text-left font-medium pb-5 text-pink">Interaction with your application</h1>
                    <p>You know your application. You use it every day. But, do you really know it? Did you ever try to
                        do things out of order? Did you try to use your keyboard instead of your mouse to navigate? Did
                        you try to use a screen reader? When I explore an app I try to think like my kid and be curious.
                        I try to act like I don't know better. These are things you can do to try to change the way you
                        interact with the application you are exploring.
                    </p>
                    <section className="py-10">
                        <h2 className="font-bold">Play with the URL</h2>
                        <p>Did you ever try to mess with the URL? Click on the link below or better try to play with the
                            URL of this page. This is a simple app but sometimes the URL contains ids or parameters. It
                            is often a good thing to try to mess with them and see what happens. See if the application
                            breaks or if you get access to things you shouldn't be able to. It is an issue that you can
                            sometimes find in applications. The application is properly secure against users that are
                            not logged in but, when you are logged in you can sometimes take actions you shouldn't be
                            able to. This happens when endpoints are not properly secure with the right permissions.
                            Messing with a URL is a simple way to try things. You can also use tools like <a
                                className="text-blue underline underline-offset-2"
                                href={"https://www.postman.com/"}>postman</a>.</p>
                        <Link to="/blabla" className="flex flex-row items-center mt-2">
                            <span className="text-pink text-lg font-semibold w-52 pl-6">Link to /blabla</span>
                        </Link>
                    </section>
                    <section className="pb-10">
                        <h2 className="font-bold">Use your keyboard</h2>
                        <p>A lot of people use their keyboards to navigate into applications. Using a keyboard can have a
                            huge impact on your interaction with an application. These are examples of what can go wrong
                            when using a keyboard.</p>
                        <section className="pt-4">
                            <h3 className="font-medium">Let's play with tabbing. Try to tab through these buttons.</h3>
                            <section
                                className="grid grid-rows-2 grid-flow-col justify-items-center md:grid-rows-1 pt-4">
                                <button tabIndex={0}
                                        className="bg-pink text-white font-semibold w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white">button
                                    1
                                </button>
                                <button tabIndex={3}
                                        className="bg-pink text-white font-semibold w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white active:shadow-none">button
                                    2
                                </button>
                                <button tabIndex={1}
                                        className="bg-pink text-white font-semibold w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white">button
                                    3
                                </button>
                                <button tabIndex={2}
                                        className="bg-pink text-white font-semibold w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white">button
                                    4
                                </button>
                            </section>
                            <p>As you can see, the ordering of the buttons is not right. This is a common issue. The
                                tabbing ordering doesn't follow the expected application flow.</p>

                            <p className="pt-6">Let's look at another example. Click or tab on the button you think is
                                correct.</p>
                            <section
                                className="grid grid-rows-2 grid-flow-col justify-items-center md:grid-rows-1 pt-4">
                                <button tabIndex={5}
                                        className="flex flex-row justify-center bg-pink text-white w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white"
                                        onClick={() => {
                                            setButtonIndex("button1")
                                        }}>
                                    <ShoppingCartIcon className="h-6 w-6"/>
                                </button>
                                <button aria-label="Shopping cart"
                                        tabIndex={5}
                                        className="flex flex-row justify-center bg-pink text-white w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white "
                                        onClick={() => {
                                            setButtonIndex("button2")
                                        }}>
                                    <ShoppingCartIcon className="h-6 w-6"/>
                                </button>
                                <button aria-label="Shopping cart"
                                        tabIndex={5}
                                        className="flex flex-row justify-center bg-pink text-white w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white outline-0"
                                        onClick={() => {
                                            setButtonIndex("button3")
                                        }}>
                                    <ShoppingCartIcon className="h-6 w-6"/>
                                </button>
                                <div tabIndex={5}
                                     className="flex flex-row justify-center bg-pink text-white w-28 border border-white rounded-md mb-2 p-2 active:translate-y-0.5 duration-200 active:bg-white"
                                     onClick={() => {
                                         setButtonIndex("button4")
                                     }}>
                                    <ShoppingCartIcon className="h-6 w-6"/>
                                </div>
                            </section>
                            <section className="text-blue font-semibold">
                                {buttonMessage()}
                            </section>

                        </section>

                    </section>
                    <Link to="/objects" className="flex flex-row items-center pt-4">
                        <span className="text-pink text-left text-lg font-semibold w-52">Dealing with Objects</span>
                        <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                    </Link>
                </section>
            </LayoutWrapper>
        </section>
    )
}
