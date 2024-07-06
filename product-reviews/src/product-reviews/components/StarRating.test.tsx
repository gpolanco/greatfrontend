import { render, screen } from "@testing-library/react";
import { StarRating } from "./StarRating";

describe("StarRating Component", () => {
  test("renders 0 full stars when value is 0", () => {
    render(<StarRating value={0} />);

    expect(screen.getAllByLabelText("rating-empty-star")).toHaveLength(5);
  });

  test("renders 1 full star when value is 1", () => {
    render(<StarRating value={1} />);

    expect(screen.getAllByLabelText("rating-full-star")).toHaveLength(1);
    expect(screen.getAllByLabelText("rating-empty-star")).toHaveLength(4);
  });

  test("renders 1 full star and 1 half star when value is 1.5", () => {
    render(<StarRating value={1.5} />);

    expect(screen.getAllByLabelText("rating-full-star")).toHaveLength(1);
    expect(screen.getAllByLabelText("rating-half-star")).toHaveLength(1);
    expect(screen.getAllByLabelText("rating-empty-star")).toHaveLength(3);
  });

  test("renders 2 full stars when value is 2", () => {
    render(<StarRating value={2} />);

    expect(screen.getAllByLabelText("rating-full-star")).toHaveLength(2);
    expect(screen.getAllByLabelText("rating-empty-star")).toHaveLength(3);
  });

  test("renders 2 full stars and 1 half star when value is 2.5", () => {
    render(<StarRating value={2.5} />);

    expect(screen.getAllByLabelText("rating-full-star")).toHaveLength(2);
    expect(screen.getAllByLabelText("rating-half-star")).toHaveLength(1);
    expect(screen.getAllByLabelText("rating-empty-star")).toHaveLength(2);
  });
});
