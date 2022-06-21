import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test('Renders Contacts title', () => {
    render(<App />)
    const title = screen.getByText("Contacts");
    expect(title).toBeInTheDocument();
});

test('Renders the add new user button', () => {
    render(<App />)
    const title = screen.getByText("+ Add new user");
    expect(title).toBeInTheDocument();
});
