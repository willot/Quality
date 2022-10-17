import {Quality} from "./Quality";
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('home page', () => {
    //Demo tests for the home page
    beforeEach(() => {
        const spyWindowOpen = jest.spyOn(window, 'scrollTo');
        spyWindowOpen.mockImplementation(jest.fn());
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });
    describe('example buttons', () => {
        it('should change the text wording when the button is clicked', async () => {
            render(<Quality/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button', {name: "Show more details"});
            await userEvent.click(buttons[0]);
            await screen.findByText("show less details");
            const buttonsClicked = screen.getAllByRole('button', {name: "show less details"});
            expect(buttonsClicked.length).toEqual(1)
        });
        it('should show more info when the button is clicked', async () => {
            render(<Quality/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button', {name: "Show more details"});
            await userEvent.click(buttons[0]);
            const extraInfo = screen.queryByText("Button 1 follows all the requirements," +
                " but will a user expect a button to get more information? Should it be a link to a help page?")
            expect(extraInfo).not.toBeNull();
        });
        it('should reset the wording of the button and change the text when clicking a second button', async () => {
            render(<Quality/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button', {name: "Show more details"});
            await userEvent.click(buttons[0]);
            expect(buttons[0]).toContainHTML("show less details");
            await userEvent.click(buttons[1]);
            expect(buttons[1]).toContainHTML("show less details");
            expect(buttons[0]).toContainHTML("Show more details");
            const extraInfo = screen.queryByText("Button 3 follows all the requirements," +
                " but the color contrast is hard to read.")
            expect(extraInfo).toBeInTheDocument();
        });
        it('should not show the information if the button is clicked again', async () => {
            render(<Quality/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button', {name: "Show more details"});
            await userEvent.click(buttons[0]);
            const extraInfo = screen.queryByText("Button 1 follows all the requirements," +
                " but will a user expect a button to get more information? Should it be a link to a help page?")
            expect(extraInfo).toBeInTheDocument();
            await userEvent.click(buttons[0]);
            expect(extraInfo).not.toBeInTheDocument();
        });
    });

    xdescribe('side bar', () => {
        it('should change the color of the text when clicking on a section', async () => {
            render(<Quality/>, {wrapper: MemoryRouter});
            const button = screen.getByRole('link', {name: "Tests"});

            expect(button).toHaveClass("text-pink font-semibold text-left")
            await userEvent.click(button);
            expect(button).toHaveClass("text-blue font-semibold text-left")
        });
    });
})