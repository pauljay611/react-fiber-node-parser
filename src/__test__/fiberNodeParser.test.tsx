import { render } from "@testing-library/react";
import React from "react";
import App from "./mockComponent/App";
import { simplifyFiberNode } from "../fiberNodeParser";
import { findReactInstanceByRoot } from "../findReactInstanceByRoot";

describe("testing fiber node parser", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("should return simplied node from fiber node", () => {
    const rootDom = document.querySelector("body");
    const rootInstance = findReactInstanceByRoot(rootDom);
    const rootSimpliedFiberNode = simplifyFiberNode(rootInstance);
    console.log(rootSimpliedFiberNode);
    expect(rootSimpliedFiberNode).toEqual("FiberNode");
  });
});
