import { Fiber, SimplifiedFiberNode } from "./types";

export function simplifyFiberNode(currentNode: Fiber): SimplifiedFiberNode {
  console.log(currentNode.memoizedState);
  const simplifiedNode: SimplifiedFiberNode = {
    type: currentNode.tag,
    displayName: currentNode.type ? currentNode.type.name : "Unnamed",
    children: getAllChildrenFromSiblings(currentNode.child).map((node) =>
      simplifyFiberNode(node)
    ),
    state:
      currentNode.memoizedState &&
      currentNode.memoizedState.constructor.name !== "element"
        ? currentNode.memoizedState
        : null,
    props:
      currentNode.memoizedProps &&
      currentNode.memoizedProps.constructor.name !== "element"
        ? currentNode.memoizedProps
        : null,
    index: currentNode.index,
    domNode: "",
  };
  return simplifiedNode;
}

function getAllChildrenFromSiblings(node: Fiber): Fiber[] {
  const children: Fiber[] = [];
  let currentNode = node;

  while (currentNode) {
    children.push(currentNode);
    currentNode = currentNode.sibling;
  }

  return children;
}

export default simplifyFiberNode;
