// generate test for reviewList component
import { render, screen } from "@testing-library/react";

import { ReviewList } from "../../reviewList";

describe("ReviewList", () => {
  it("should render the review list", () => {
    render(<ReviewList />);

    expect(screen.getByText("Review List")).toBeInTheDocument();
  });
});
