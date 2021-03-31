import { render } from "@testing-library/react";
import React from "react";
import App from "./mockComponent/App";
import { findReactInstanceByRoot } from "../findReactInstanceByRoot";
import { HostRoot } from "../types";

describe("testing find react instance root", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("should return Fiber node from root node", () => {
    const rootDom = document.querySelector("body");
    const rootInstance = findReactInstanceByRoot(rootDom);
    expect(rootInstance.constructor.name).toEqual("FiberNode");
  });

  test("should return correct react root container component from root node", () => {
    const rootDom = document.querySelector("body");
    const rootInstance = findReactInstanceByRoot(rootDom);
    expect(
      "_reactRootContainer" in rootInstance.stateNode.containerInfo
    ).toEqual(true);
    expect(rootInstance.tag).toEqual(HostRoot);
  });
});
