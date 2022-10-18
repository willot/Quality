import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {UserEvent} from "@testing-library/user-event/dist/types/setup/setup";
import {Quality} from "./pages/Quality";

describe('links', () => {
  let user: UserEvent;
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
    user = userEvent.setup()
  });

  test("event route", async () => {
    const routes = [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: '/quality',
        element: <Quality/>
      }
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/quality"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router}/>);

    const button = screen.getByRole('link', {name: "Let's get Started"});
    await screen.findByText("Use Exploratory Testing to improve the quality of your product!");

    await user.click(button)
    await screen.findByText("What is quality?");
  })
})