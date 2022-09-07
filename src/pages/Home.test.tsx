import {Home} from "./Home";
import {render, screen} from '@testing-library/react';
import {click} from "@testing-library/user-event/dist/click";
import {MemoryRouter} from "react-router-dom";

describe('home page', () =>{
    describe('example buttons', () => {
        it('should change the text wording when the button is clicked', () => {
                render(<Home/>,{wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button');
            expect(buttons[0]).toContainHTML("Show more details");
            click(buttons[0]);
            expect(buttons[0]).toContainHTML("show less details")
        });
        it('should show more info when the button is clicked', () => {
            render(<Home/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button');
            click(buttons[0]);
            const extraInfo = screen.queryByText("Button 1 follow all the requirements. But will a user expect " +
                "a button to get more information?")
            expect(extraInfo).not.toBeNull();
        });
        it('should reset the wording of the button and change the text when clicking a second button', () => {
            render(<Home/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button');
            click(buttons[0]);
            expect(buttons[0]).toContainHTML("show less details");
            expect(buttons[2]).toContainHTML("Show more details");
            click(buttons[2]);
            expect(buttons[2]).toContainHTML("show less details");
            expect(buttons[0]).toContainHTML("Show more details");
            const extraInfo = screen.queryByText("Button 3 follow all the requirements. But the color contrast is" +
                " hard to read.")
            expect(extraInfo).toBeInTheDocument();
        });
        it('should not show the information if the button is clicked again', () => {
            render(<Home/>, {wrapper: MemoryRouter});
            const buttons = screen.getAllByRole('button');
            click(buttons[0]);
            const extraInfo = screen.queryByText("Button 1 follow all the requirements. But will a user expect " +
                "a button to get more information?")
            expect(extraInfo).toBeInTheDocument();
            click(buttons[0]);
            expect(extraInfo).not.toBeInTheDocument();
        });
    });
})