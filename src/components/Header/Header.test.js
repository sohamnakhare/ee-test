import Header from "./Header";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("should exists", () => {
    expect(Header).toBeTruthy();
  });

  it("should render menus", () => {
    const menus = [
      { key: "cat_1", label: "category 1" },
      { key: "cat_2", label: "category 2" }
    ];

    const { getByText } = render(<Header menus={menus} />);

    const cat1MenuItem = getByText("category 1");
    expect(cat1MenuItem).toBeTruthy();
  });

  it("should have a logo", () => {
    const menus = [];
    const { container } = render(<Header menus={menus} />);

    const logo = container.querySelector(".app-header-logo");

    expect(logo).toBeTruthy();
  });
});
