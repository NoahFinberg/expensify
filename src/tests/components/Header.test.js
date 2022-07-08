import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Header from "../../components/Header";

test("should render Header correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();

  console.log(renderer.getRenderOutput());
});
