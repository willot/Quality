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
            className="bg-pink text-blue w-28 border border-white rounded-md"
            onClick={() => {
                 const details = !isVisible ? buttonId : "";
                 setTextDetails(details);
                 setIsVisible(!isVisible);
                 }}
                >{buttonWording(isVisible)}</div>
    )
}