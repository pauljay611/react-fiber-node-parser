import { Fiber, SimplifiedFiberNode } from "./types";

export function simplifyFiberNode(currentNode: Fiber): SimplifiedFiberNode {
  const initNode: SimplifiedFiberNode = {
    type: currentNode.tag,
    displayName: currentNode.stateNode.constucture.name,
    children: getAllChildrenFromSiblings(currentNode).map((node) =>
      simplifyFiberNode(node)
    ),
    state: currentNode.memoizedState,
    props: currentNode.memoizedProps,
    index: currentNode.index,
    domNode: currentNode.stateNode,
  };
  return initNode;
}

function getAllChildrenFromSiblings(node: Fiber): Fiber[] {
  const children: Fiber[] = [];
  let currentNode = node;

  while (node) {
    children.push(currentNode);
    currentNode = currentNode.sibling;
  }

  return children;
}
