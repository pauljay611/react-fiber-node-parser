import { render } from "@testing-library/react";
import React from "react";
import App from "./mockComponent/App";
import { findReactInstanceByRoot } from "../findReactInstanceByRoot";
import { getAllChildrenBySiblings, getDisplayNameByType } from "../utils";

describe("testing fiber node parser", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("should return correct display name from type", () => {
    const rootDom = document.querySelector("div");
    const rootInstance = findReactInstanceByRoot(rootDom);
    const parentDisplayName = getDisplayNameByType(rootInstance.child.type);
    const childDisplayName = getDisplayNameByType(
      rootInstance.child.child.child.child.type
    );
    expect(parentDisplayName).toEqual("App");
    expect(childDisplayName).toEqual("Child");
  });

  test("should return correct children from siblings", () => {
    const rootDom = document.querySelector("div");
    const rootInstance = findReactInstanceByRoot(rootDom);
    const parentComponent = rootInstance.child.child;
    const childrenFromParent = getAllChildrenBySiblings(parentComponent.child);
    expect(childrenFromParent.length).toEqual(3);
  });
});
