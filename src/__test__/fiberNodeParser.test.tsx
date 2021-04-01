import {
  render,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import React from "react";
import App from "./mockComponent/App";
import { findReactInstanceByRoot } from "../findReactInstanceByRoot";
import {
  getAllChildrenBySiblings,
  getAllStateByMemoizedStateList,
  getDisplayNameByType,
  getDomNodeByStateNode,
} from "../utils";

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

  test("should return correct state list from all state", () => {
    const rootDom = document.querySelector("div");
    const button = getByTestId(rootDom, "click");

    expect(button).toBeInTheDocument();

    const rootInstance = findReactInstanceByRoot(rootDom);
    const initStateList = getAllStateByMemoizedStateList(
      rootInstance.child.memoizedState
    );
    expect(initStateList).toEqual([0, 1]);

    fireEvent.click(button);

    const clickedStateList = getAllStateByMemoizedStateList(
      rootInstance.child.memoizedState
    );

    // wait for merge event to update state from state queue
    waitFor(() => {
      expect(clickedStateList).toEqual([1, 2]);
    });
  });

  test("should return correct dom node from state node", () => {
    const rootDom = document.querySelector("div");
    const expectedParentDomNode = document.querySelector(".parent");
    const rootInstance = findReactInstanceByRoot(rootDom);
    const parentComponent = rootInstance.child.child;
    const parentDomNode = getDomNodeByStateNode(parentComponent.stateNode);
    expect(parentDomNode).toBe(expectedParentDomNode);
  });
});
