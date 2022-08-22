import {useState} from "react";

export const Home = () => {
   const [showDetailsB1, setShowDetailsB1] = useState(false);
   const [showDetailsB2, setShowDetailsB2] = useState(false);
   const [showDetailsB3, setShowDetailsB3] = useState(false);
   const [showDetailsB4, setShowDetailsB4] = useState(false);
   const [textDetails, setTextDetails] = useState("");


    const details = () => {
        if (textDetails ==="") {
            return null;
        }
        if (textDetails=== "button1") {
            return (
                <section>
                    Button1 follow all the requirements. But will a user expect a button to get more information?
                </section>
            )
        }
        if (textDetails=== "button2") {
            return (
                <section>
                    Button2 follow all the requirements. But the wording of the button is confusing.
                </section>
            )
        }
        if (textDetails=== "button3") {
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

    const buttonText = (value: boolean) => {
        return value? "show less details": "show more details";
    }

    const wrongWordingButtonText = () => {
        return showDetailsB2? "less details": "details";
    }

    return (
        <section className="bg-blue h-full text-white">
            <h1>What is quality?</h1>
            <h2>Dictionary definition:</h2>
            <p>The standard of something as measured against other things of a similar kind;
                the degree od excellence of something</p>
            <p className="text-xs">Oxford Languages</p>
            <p>It is not really useful, doesn't really tell us what is quality. What should I compare my website too?</p>
            <p>To my competition? Do I have competition?</p>
            <h2>Useful definition:</h2>
            <p>
                "An essential requirement of these products is that they meet the needs of those members of society who
                will actually use them. This concept of fitness for use is universal. It applies to all goods and
                services, without exception. The popular term for fitness for use is Quality, and our basic definition
                becomes: quality means fitness for use."
            </p>
            <p className="text-xs">Joseph Juran</p>
            <p>
                Basically we produce something the user want and meet their expectation. Quality is all about the users
                not about the requirements.
            </p>
            <p>
                As a software engineer this is interesting. The quality of my work is in general base on me completing
                the requirements of my story, adding tests, passing all the previous tests and someone validating the work.
                If I do that my story get accepted and push to prod.
                But this definition is interesting because I can do all my work (write tests, pass tests, complete
                requirements) and nonetheless produce bad quality.
            </p>
            <h2>Lets look at this example:</h2>
            <h3>The story:</h3>
            <p>as a user I need to be able to click on a button and get more information on quality</p>
            <p>acceptance criteria:</p>
            <ul>Match the design</ul>
            <ul>Information should appear below the button</ul>
            <ul>Text of the button should change after clicking on it</ul>
            <ul>Information should disapear if the user reclick the button</ul>
            <section className="flex flex-row space-x-2 justify-center py-2">
                <button className="bg-pink text-blue w-28 border border-white rounded-md"
                        onClick={ () => {
                            const showDetails = !showDetailsB1? "button1" : "";
                            setTextDetails(showDetails);
                            setShowDetailsB1(!showDetailsB1);
                            if(!showDetailsB1) {
                                setShowDetailsB2(!showDetailsB2);
                                setShowDetailsB3(!showDetailsB3);
                                setShowDetailsB4(!showDetailsB4);
                            }
                        }}>{buttonText(showDetailsB1)}
                </button>
                <button className="bg-pink text-blue w-28 border border-white rounded-md"
                        onClick={ () => {
                            const showDetails = showDetailsB2? "button2" : "";
                            setTextDetails(showDetails);
                            setShowDetailsB2(!showDetailsB2);
                            if(!showDetailsB2) {
                                setShowDetailsB1(!showDetailsB2);
                                setShowDetailsB3(!showDetailsB3);
                                setShowDetailsB4(!showDetailsB4);
                            }
                        }}>{wrongWordingButtonText()}</button>
                <button className="bg-white text-pink w-28 border border-white rounded-md"
                        onClick={ () => {
                            const showDetails = !showDetailsB3? "button3" : "";
                            setTextDetails(showDetails);
                            setShowDetailsB3(!showDetailsB3);
                            if(!showDetailsB3) {
                                setShowDetailsB1(!showDetailsB2);
                                setShowDetailsB2(!showDetailsB3);
                                setShowDetailsB4(!showDetailsB4);
                            }
                        }}>{buttonText(showDetailsB3)}</button>
                <div className="bg-pink text-blue w-28 border border-white rounded-md"
                     onClick={ () => {
                         const showDetails = !showDetailsB4? "buttonAccessibility" : "";
                         setTextDetails(showDetails);
                         setShowDetailsB4(!showDetailsB4);
                         if(!showDetailsB4) {
                             setShowDetailsB1(!showDetailsB2);
                             setShowDetailsB2(!showDetailsB3);
                             setShowDetailsB3(!showDetailsB4);
                         }
                }}>{buttonText(showDetailsB4)}</div>
            </section>
            <section className="text-red">
                {details()}
            </section>
            <p>I think this is where exploratory testing enter. </p>

        </section>
    )
}