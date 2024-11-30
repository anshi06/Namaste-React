import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("Should load Hesder component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});

  expect(loginButton).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton); //Fire the event

    const logoutButton = screen.getByRole("button", {name: "Logout"});
  
    expect(logoutButton).toBeInTheDocument();
  });
