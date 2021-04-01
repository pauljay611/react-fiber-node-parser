import { Fiber, MemoizedState } from "./types";

export function getDisplayNameByType(nodeType: any) {
  if (!nodeType || !nodeType.name) return "Unnamed component";
  if (nodeType.name) return nodeType.name;
  if (typeof nodeType === "object") return nodeType.$$typeof;
  return nodeType;
}

export function getAllChildrenBySiblings(node: Fiber): Fiber[] {
  if (node.memoizedState && !("element" in node.memoizedState)) return [];
  const children: Fiber[] = [];
  let currentNode = node;

  while (currentNode) {
    children.push(currentNode);
    currentNode = currentNode.sibling;
  }

  return children;
}

export function getAllStateByMemoizedStateList(memoizedState: MemoizedState) {
  let currentState = memoizedState;
  const state = [];

  while (currentState) {
    if (currentState.baseState !== null && currentState.baseState !== undefined)
      state.push(currentState.baseState);
    currentState = currentState.next;
  }
  return state;
}

export function getDomNodeByStateNode(stateNode: any) {
  if (!stateNode) return null;
  return stateNode;
}
