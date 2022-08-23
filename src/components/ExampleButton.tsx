import {OutsideClickDetector} from "../hooks/OutsideClickDetector";

type ExampleButtonProps = {
    setTextDetails: (value: string) => void;
    buttonId: string;
    buttonWording: (value: boolean) => string;
    css: string;
}

export const ExampleButton = ({setTextDetails, buttonId, buttonWording, css}:ExampleButtonProps) => {
    const {ref, isVisible, setIsVisible} = OutsideClickDetector(false);

    return (
        <button ref={ref} className={css}
                onClick={() => {
                    const details = !isVisible ? buttonId : "";
                    setTextDetails(details);
                    setIsVisible(!isVisible);
                }}>{buttonWording(isVisible)}
        </button>
    )
}