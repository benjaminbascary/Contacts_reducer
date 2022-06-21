import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test('Renders Contacts title', () => {
    render(<App />)
    const title = screen.getByText("Contacts");
    expect(title).toBeInTheDocument();
});

test('Renders the add new user button', () => {
    render(<App />);
    const title = screen.getByText("+ Add new user");
    expect(title).toBeInTheDocument();
});

test('Renders the three inputs to add a new user', () => {
    render(<App />);
    const button = screen.getByText("+ Add new user");
    fireEvent.click(button);
    const firstInput = screen.getByLabelText("Email address");
    const secondInput = screen.getByLabelText("Name");
    const thirdInput = screen.getByLabelText("Last Name");
    expect(firstInput).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
    expect(thirdInput).toBeInTheDocument();
})

test("A new user can be added to the table and deleted after ", () => {
    render(<App />);
    const button = screen.getByText("+ Add new user");
    fireEvent.click(button);
    // Form opens up in the screen
    const add = screen.getByText("Add!");
    const inputs = screen.getAllByTestId('form');
    fireEvent.change(inputs[0], {target: {value: 'benjaminbascary@gmail.com'}});
    fireEvent.change(inputs[1], {target: {value: 'Benjamin'}});
    fireEvent.change(inputs[2], {target: {value: 'Bascary'}});
    expect(inputs[0].value).toBe('benjaminbascary@gmail.com');
    expect(inputs[1].value).toBe('Benjamin');
    expect(inputs[2].value).toBe('Bascary');
    fireEvent.click(add);
    // Clicked on the add button
    expect(screen.getByText('benjaminbascary@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Benjamin')).toBeInTheDocument();
    expect(screen.getByText('Bascary')).toBeInTheDocument();
    const eraseButton = screen.getByTestId('erasebutton');
    fireEvent.click(eraseButton);
    expect(eraseButton).not.toBeInTheDocument();
})
