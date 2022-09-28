import {useEffect, useRef} from "react";

export const ShowSectionHook = (clickedSection: boolean, setIsClickedSection: (value: boolean) => void, setIdVisible: (value: string) => void, window: Window, lastSectionId: string) => {


    const ref = useRef(null);

    useEffect(() => {
        //Scroll listener to determine the scroll direction
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

            if (bottom && lastSectionId !=="") {
                setIdVisible(lastSectionId);

            }
        };

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDir);
        };

        window.addEventListener("scroll", onScroll);

        //interjection observer to detect if element is on the page
        const element1 = ref.current;

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

        return () => {
            observer.disconnect()
            window.removeEventListener("scroll", onScroll);
        }

    }, [clickedSection, setIdVisible, setIsClickedSection, window, lastSectionId])

    return {ref: ref}
}