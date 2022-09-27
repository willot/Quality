import React from "react";

type SectionLinkProps= {
    idLink: string;
    currentSection: string|undefined;
    setCurrentSection: (value: string) => void;
    setIsClickedSection: (value: boolean) => void;
}

export const SectionLink = ({idLink, currentSection, setCurrentSection, setIsClickedSection}:SectionLinkProps) => {
    return (
        <a href={`#${idLink}`}
           className={`${currentSection === idLink ? "text-blue font-semibold text-left" : "text-pink font-semibold text-left"
           }`}
           onClick={() => {
               setCurrentSection(idLink)
               setIsClickedSection(true);
           }}>{idLink}</a>
    )
}