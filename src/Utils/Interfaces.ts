export interface ButtonFlowPages {
    [pageName: string]: ButtonFlow
}

export interface ButtonFlow {
    button1: {
        text: string,
        link: string,
    },
    button2: {
        text: string,
        link: string,
    },
    listSection: string[],
    title: string,
    subTitle: string,
}
