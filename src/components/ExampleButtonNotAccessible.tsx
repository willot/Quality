import {OutsideClickDetector} from "../hooks/OutsideClickDetector";

type ExampleButtonNotAccessibleProps = {
    setTextDetails: (value: string) => void;
    buttonId: string;
    buttonWording: (value: boolean) => string;
}

export const ExampleButtonNotAccessible = ({setTextDetails, buttonId, buttonWording}:ExampleButtonNotAccessibleProps) => {
    const {ref, isVisible, setIsVisible} = OutsideClickDetector(false);


    return (
        <div ref={ref}
            className="bg-pink font-semibold text-white w-28 text-center border border-white rounded-md cursor-pointer mb-2 active:translate-y-0.5 duration-200 active:bg-blue hover:bg-blue"
            onClick={() => {
                    const details = !isVisible ? buttonId : "";
                 setTextDetails(details);
                 setIsVisible(!isVisible);
                 }}
                >{buttonWording(isVisible)}</div>
    )
}