import {useLocation} from "react-router-dom";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useEffect, useState} from "react";
import {ShowSectionHook} from "../hooks/ShowSectionHook";

export const Ecosystem = () => {
    const { pathname } = useLocation();
    const [idVisible, setIdVisible] = useState("");
    const [clickedSection, setIsClickedSection] = useState(false);

    const {ref1, ref2, ref3} = ShowSectionHook(clickedSection, setIsClickedSection, setIdVisible, window, "Limitless-environment");

    useEffect(() => {
        document.title = 'Exploratory Testing-Environment';
        window.scrollTo(0, 0);
        setIdVisible("Example")
    }, [pathname]);

    return (
        <section className="bg-white-bg flex flex-row justify-center w-full">
            <LayoutWrapper page="environment" currentSection={idVisible} setCurrentSection={setIdVisible}
                           setIsClickedSection={setIsClickedSection}>
                <section className="bg-white-bg h-full text-black text-justify py-10 px-1">
                    <p>Your application is not only the software. It is running on servers. It is being accessed from a
                        lot of
                        different devices, PC, tablets, androids and iPhones... It is using databases. It is using external
                        API for data for transactions, for login... It may be connected to physical hardware or
                        devices...
                        It is an interesting exercise to figure out what is interacting with your software. This can
                        help you find potential problems for your users.
                    </p>
                    <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Example" ref={ref1}>Example</h2>
                    <p>We can take the example of on an app that let you buy seeds. It is using an
                        external
                        API for
                        transactions, something like Stripe. Now let's think of potential problems that can occur.
                        What
                        happens if Stripe goes down for whatever reason? It is unlikely but it is possible and could have
                        some
                        serious consequences. This is a scenario that is interesting to run. What happens when the
                        external
                        API doesn't send data back or time out when being called? Does your application crash? Do you show
                        a
                        warning to your user that the transaction can't be performed at this time? Do you show a message
                        to
                        try again? Do you at least let people put seeds in their cart or this part doesn't work either?
                        As
                        much as we would like to believe that big systems don't go down, these big API providers can go
                        down or
                        be hacked and be unable to provide the data your app relies on. So exploring the impact of API providers or
                        outside
                        services going down on your application can be very valuable.</p>

                    <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Hardware" ref={ref2}>Hardware</h2>
                    <p>The diversity of hardware that can run your application is always increasing,
                        how is your app running
                        on an android versus a laptop? Screen size sometimes can be a little tricky because there are so
                        many
                        different sizes so testing on multiple devices and rotating the devices used can be important.
                        The internet connection can also be a limiting factor for your application. Your application is
                        working
                        well on a 1go internet connection but does the system time out when you use it on a slow 4g?</p>
                    <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Limitless-environment" ref={ref3}>Limitless environment</h2>
                    <p>There is a lot that you can explore about how an application interact with the
                        rest
                        of the world. An example that come to mind is paying medical bills. I recently broke my ankle
                        pretty
                        badly and
                        received treatment in multiple places and different doctors. Then I started receiving medical
                        bills.
                        Each one separate for xrays, doctors even if perform in the same office. The fun part is that
                        these
                        bills came in different formats even if they all came from the same big healthcare company. I
                        counted
                        3 different formats. It became interesting when I started to pay these bills online. In
                        one case in particular the first question asked you which location the service was provided. But
                        the
                        bill does not mention this information. I had to figure out what was the bill for to guess the
                        location... How many other bill have you receive where you are asked to enter the account number
                        but
                        you can't find the field in the form and only to figure out it is simply your name. Testing a
                        system
                        like a real user interact with it is extremely important. It can really make a difference for
                        your
                        users. </p>
                    <p className="pt-4">Make a map of your app ecosystem and start exploring the interactions with
                        external
                        system. You will
                        gain insight on your system and its limitations. It will also help you be proactive when
                        something go
                        wrong instead of being reactive.</p>
                </section>
            </LayoutWrapper>
        </section>
    )
}