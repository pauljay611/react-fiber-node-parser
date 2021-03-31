import { Fiber, MemoizedState } from "./types";

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
    state.push(currentState.memoizedState);
    currentState = currentState.next;
  }
  return state;
}

export function getDisplayNameByType(nodeType: any) {
  if (!nodeType || !nodeType.name) return "Unnamed component";
  if (nodeType.name) return nodeType.name;
  if (typeof nodeType === "object") return nodeType.$$typeof;
  return nodeType;
}

export function getDomNode(stateNode: any) {
  if (stateNode || stateNode.containerInfo) return null;
  return stateNode.containerInfo;
}
