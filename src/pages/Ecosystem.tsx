import {useLocation} from "react-router-dom";
import {LayoutWrapper} from "../components/LayoutWrapper";
import {useEffect, useState} from "react";
import {ShowSectionHook} from "../hooks/ShowSectionHook";

export const Ecosystem = () => {
    const {pathname} = useLocation();
    const [idVisible, setIdVisible] = useState("");
    const [clickedSection, setIsClickedSection] = useState(false);

    const {
        ref1,
        ref2,
        ref3
    } = ShowSectionHook(clickedSection, setIsClickedSection, setIdVisible, window, "Limitless-environment");

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
                    <p>Your application is more than just software; it's a complex ecosystem. It operates on servers,
                        caters to a diverse array of devices including PCs, tablets, Androids, and iPhones. It relies on
                        databases and communicates with external APIs for transactions and authentication. It may even
                        interface with physical hardware and devices.
                        This diverse landscape of interactions forms an intricate web that is worth exploring.
                        Understanding these interactions can uncover potential issues that may impact your users'
                        experience.
                    </p>
                    <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Example"
                        ref={ref1}>Example</h2>
                    <p>Let's consider an example: imagine an app that allows users to purchase seeds. This app relies on
                        an external API for transactions, similar to a service like Stripe. Now, let's explore potential
                        challenges that could arise.</p>

                    <p>What if, for some reason, Stripe experiences downtime? While it may be unlikely, the
                        consequences could be significant. It's a scenario worth considering. Additionally, what happens
                        when the external API fails to respond or times out during a call? Does your application
                        gracefully handle such situations, or does it crash outright? Do you provide users with
                        informative warnings, encouraging them to retry the transaction?</p>

                    <p>Moreover, consider whether users can still add items to their cart even when the transaction
                        isn't possible. As much as we'd like to believe that large-scale systems are infallible, even
                        major API providers can face issues, such as downtime or security breaches, which can disrupt
                        the data flow your app relies on.</p>

                    <p>Hence, delving into the potential impact of API providers or external services encountering
                        problems is a valuable exercise.</p>

                    <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4" id="Hardware"
                        ref={ref2}>Hardware</h2>
                    <p>TAs technology evolves, the variety of hardware capable of running your application continues to
                        expand. Consider how your app performs on diverse platforms—whether it's an Android device or a
                        laptop.
                        Screen size can be hard to deal with due to the sheer range of
                        available sizes. Consequently, thorough testing across multiple devices, with varying screen
                        dimensions, is crucial as well as dealing with screen rotation behavior.
                        Furthermore, it's important to acknowledge that internet connectivity can significantly
                        influence your application's performance. While your app may function seamlessly on a robust
                        1Gbps internet connection, how does it behave on a slower 4G network? Does it gracefully handle
                        the potential delays, or does it time out and frustrate users?</p>
                    <p>Understanding how your application adapts to diverse hardware configurations and network
                        conditions is vital for delivering a consistent and reliable user experience.</p>
                    <h2 className="pt-10 font-bold text-2xl border-b border-grey-light pb-2 mb-4"
                        id="Limitless-environment" ref={ref3}>Limitless environment</h2>
                    <p>
                        There's a wealth of insights to be gained from exploring how an application interacts with the
                        world at large. To illustrate this, consider the process of paying medical bills—an experience I
                        encountered firsthand recently.
                    </p>
                    <p>
                        After sustaining a significant ankle injury, I underwent treatment from various healthcare
                        providers in different locations. Subsequently, I began receiving medical bills, each billing me
                        for X-rays, doctor consultations, and medical equipment, even when these services were
                        administered within the same healthcare facility.
                    </p>
                    <p>
                        The intriguing part was that despite originating from a single prominent healthcare
                        organization, these bills arrived in three distinct formats. Things became even more interesting
                        when I attempted to pay these bills online. In one particular case, the initial field to be
                        filled out was about the location where the service had been rendered, yet the bill itself
                        lacked this crucial detail. I found myself having to deduce the service location to proceed with
                        the payment.
                    </p>
                    <p>
                        Have you ever encountered a similar situation, where you were prompted to enter an account
                        number, only to search fruitlessly for the corresponding field within the bill, only to later
                        discover that your name would suffice? Such experiences highlight the significance of testing a
                        system from a user's perspective. This hands-on approach can make a meaningful difference in
                        ensuring a seamless and user-friendly experience.
                    </p>
                    <p className="pt-4">Take the time to create a comprehensive map of your application's ecosystem and
                        delve into its interactions with external systems. By doing so, you'll acquire valuable insights
                        into your system's intricacies and constraints. This proactive approach equips you to anticipate
                        potential issues and address them before they escalate, rather than merely reacting when
                        problems arise.</p>
                </section>
            </LayoutWrapper>
        </section>
    )
}