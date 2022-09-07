import {Link} from "react-router-dom";
import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/24/solid";

export const Ecosystem = () => {
    return (
        <section className="bg-blue flex flex-row justify-center w-full">
            <section
                className="bg-blue h-full text-white text-justify py-10 px-5 w-11/12 md:w-9/12 lg:w-8/12 xl:w7/12 2xl:w-5/12">
                <Link to="/states" className="flex flex-row items-center mt-10">
                    <ArrowLongLeftIcon className="text-pink h-16 w-16"/>
                    <span
                        className="text-pink text-lg font-semibold w-52 pl-6">Back to states and changing states</span>
                </Link>
                <h1 className="text-4xl font-medium pb-5">Application in its environment</h1>
                <p>Your application is not only the software. It is running on servers. It is being access from a lot of
                    different devices, PC, tablets, androids, iPhones... It is using databases. It is using external
                    API for data, for transactions, for login... It may be connected to physical hardware or devices...
                    It is an interesting exercise to figure out what is interacting with your software. This can help
                    you find potential problems for your users.
                </p>
                <p className="pt-4">We can take the example of on app that let you buy seeds. It is using an external
                    API for
                    transactions, something like stripe. Now let's think of potential problems that can happens. What
                    happens if stripe go down for whatever reason. It is unlikely but it can happens and could have some
                    serious consequences. This is a scenario that is interesting to run. What happens when the external
                    API doesn't send data back or time out when being call? Does your application crash? Do you show a
                    warning to your user that the transaction can't be perform at this time ? Do you show a message to
                    try again? Do you at least let people put seeds in their cart or this part doesn't work either? As
                    much as we would like to believe that big system don't go down these big API provider can go down or
                    be hack and be unable to provide the data your app rely on. So exploring what happens when outside
                    service go down can be very valuable.</p>
                <p className="pt-4">The diversity of hardware that can run your application is always increasing, how is
                    your app running
                    on a android versus a laptop. Screen size sometime can be a little tricky because there are so many
                    different size so testing on multiple devices and rotating the devices used can be important.
                    Internet connection can also be a limiting factor for your application. Your application is working
                    well on a 1go internet connection but does the system time out when you use it on a slow 4g?</p>
                <p className="pt-4">There is a lot that you can explore about how an application interact with the rest
                    of the world. An example that come to mind is paying medical bills. I recently broke my ankle pretty
                    badly and
                    received treatment in multiple places and different doctors. Then I started receiving medical bills.
                    Each one separate for xrays, doctors even if perform in the same office. The fun part is that these
                    bills came in different formats even if they all came from the same big healthcare company. I counted
                    3 different formats. It became interesting when I started to pay these bills online. In
                    one case in particular the first question asked you which location the service was provided. But the
                    bill does not mention this information. I had to figure out what was the bill for to guess the
                    location... How many other bill have you receive where you are asked to enter the account number but
                    you can't find the field in the form and only to figure out it is simply your name. Testing a system
                    like a real user interact with it is extremely important. It can really make a difference for your
                    users. </p>
                <p className="pt-4">Make a map of your app ecosystem and start exploring the interactions with external
                    system. You will
                    gain insight on your system and its limitations. It will also help you be proactive when something go
                    wrong instead of being reactive.</p>
                <Link to="/summary" className="flex flex-row items-center pt-10">
                    <span className="text-pink text-lg font-semibold w-52">Summary</span>
                    <ArrowLongRightIcon className="text-pink h-16 w-16"/>
                </Link>

            </section>
        </section>
    )
}