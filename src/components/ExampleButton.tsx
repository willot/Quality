import {OutsideClickDetector} from "../hooks/OutsideClickDetector";

type ExampleButtonProps = {
    setTextDetails: (value: string) => void;
    buttonId: string;
    buttonWording: (value: boolean) => string;
}

export const ExampleButton = ({setTextDetails, buttonId, buttonWording}:ExampleButtonProps) => {
    const {ref, isVisible, setIsVisible} = OutsideClickDetector(false);

    return (
        <button ref={ref} className="bg-pink text-blue w-28 border border-white rounded-md"
                onClick={() => {
                    const details = !isVisible ? buttonId : "";
                    setTextDetails(details);
                    setIsVisible(!isVisible);
                }}>{buttonWording(isVisible)}
        </button>
    )
}