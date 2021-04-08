import { Fiber, SimplifiedFiberNode } from "./types";
import {
  getDisplayNameByType,
  getAllChildrenBySiblings,
  getAllStateByMemoizedStateList,
  getDomNodeByStateNode,
} from "./utils";

export function fiberNodeParser(currentNode: Fiber): SimplifiedFiberNode {
  const displayName = getDisplayNameByType(currentNode.type);
  const children = getAllChildrenBySiblings(currentNode.child).map((node) =>
    fiberNodeParser(node)
  );
  const state = getAllStateByMemoizedStateList(currentNode.memoizedState);
  const domNode = getDomNodeByStateNode(currentNode.stateNode);

  const simplifiedNode: SimplifiedFiberNode = {
    type: currentNode.tag,
    displayName,
    children,
    state,
    props: currentNode.memoizedProps,
    index: currentNode.index,
    domNode,
  };
  return simplifiedNode;
}

export default fiberNodeParser;
