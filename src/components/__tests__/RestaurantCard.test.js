import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../mocks/rescardMock.json"
import "@testing-library/jest-dom";

it("Should render Restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})