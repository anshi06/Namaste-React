import { act } from "react"; // To manage the state updates
import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router"; //To recognize the Link from react-router
import "@testing-library/jest-dom";

const MOCK_DATA = {}; //Huge data what api returns.

// Mocking the Browser fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search resList for burger text Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBeInTheDocument(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  //           <input
  //             data-testid="searchInput"
  //             type="text"
  //             className="border border-solid border-black rounded-lg"
  //             value={searchText}
  //             onChange={(e) => setSearchText(e.target.value)}
  //           />

  const searchInput = screen.getByTestId("SearchInput");

  fireEvent.change(searchInput, { target: { value : "burger"}});

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  //Screen should load 4 cards (Assert this)
  expect(cards.length).toBeInTheDocument(4);
});
