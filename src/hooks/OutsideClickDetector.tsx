import {useEffect, useRef, useState} from "react";

export const OutsideClickDetector = (initialVisibleState: boolean) => {
    const [isVisible, setIsVisible] = useState(initialVisibleState);
    const ref = useRef<any>(null);

    const handleOutsideClick = (event: any) => {
        if(ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => { document.removeEventListener('click', handleOutsideClick)}
    })

    return {ref, isVisible, setIsVisible};
}