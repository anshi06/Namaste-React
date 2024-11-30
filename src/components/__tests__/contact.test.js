// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import ContactUs from "../components/ContactUs";

// //describe used to group the test cases
// describe("ContactUs Page Test Cases", () => {
//   test("document is defined", () => {
//     expect(typeof document).toBe("object");
//   });

//   test("Should load contact us component", async () => {
//     render(<ContactUs />);

//     const h = screen.getByRole("heading");
//     //Assertion
//     expect(h).toBeInTheDocument();
//   });

//   test("Should load button inside contact component", async () => {
//     render(<ContactUs />);

//     // const button = screen.getByRole('button');
//     const button = screen.getByText("Submit");
//     //Assertion
//     expect(button).toBeInTheDocument();
//   });

//   test("Should load 2 input boxes on the Contact Us", async () => {
//     render(<ContactUs />);

//     const inputBoxes = screen.getAllByRole("textbox"); //Querying
//     //inputBox => React Element (Object) JSX element, react fibre node, virtual DOM Eelement
//     expect(inputBoxes.length).toBe(2);
//   });
// });
