import {useEffect, useRef} from "react";

export const ShowSectionHook = (clickedSection: boolean, setIsClickedSection: (value: boolean) => void, setIdVisible: (value: string) => void, window: Window, lastSectionId: string) => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let scrollDir = "";

    const updateScrollDir = () => {
        const scrollY = window.scrollY;

        if (Math.abs(scrollY - lastScrollY) < threshold) {
            return;
        }
        scrollDir = (scrollY > lastScrollY ? "scrolling down" : "scrolling up");
        lastScrollY = scrollY > 0 ? scrollY : 0;

        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

        if (bottom) {
            setIdVisible(lastSectionId);

        }
    };

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    useEffect(() => {
        const element1 = ref1.current;
        const element2 = ref2.current;
        const element3 = ref3.current;
        const element4 = ref4.current;
        const element5 = ref5.current;

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDir);
        };

        window.addEventListener("scroll", onScroll);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (scrollDir === "scrolling down" && !entry.isIntersecting && !clickedSection) {
                    setIdVisible(entry.target.id);
                }
                if (scrollDir === "scrolling up" && entry.isIntersecting && !clickedSection) {
                    setIdVisible(entry.target.id);
                }

                setIsClickedSection(false);
            },
            {
                root: null, //viewport
                rootMargin: "0px",
                threshold: 1, //this means that the element get detected when 100% of the card is visible
            })

        if (element1) {
            observer.observe(element1);
        }
        if (element2) {
            observer.observe(element2);
        }
        if (element3) {
            observer.observe(element3);
        }
        if (element4) {
            observer.observe(element4);
        }
        if (element5) {
            observer.observe(element5);
        }

        return () => {
            observer.disconnect()
            window.removeEventListener("scroll", onScroll);
        }

    }, [clickedSection, setIdVisible, setIsClickedSection, window])

    return {ref1, ref2, ref3, ref4, ref5}
}