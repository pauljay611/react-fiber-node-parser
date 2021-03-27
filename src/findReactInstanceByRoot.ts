import { Fiber } from "./types";

// find react instance or root node
export function findReactInstanceByRoot(rootNode: Element) {
  function searchNode(curNode: Element): Fiber | undefined {
    for (const [key, value] of Object.entries(curNode)) {
      if (key.startsWith("__reactInternalInstance$")) return value;
      if (key === "_reactRootContainer") return value._internalRoot.current;
    }
    const children = Array.from(curNode.children);
    for (const childNode of children) {
      const findedNode = searchNode(childNode);
      if (findedNode) return findedNode;
    }
  }
  return searchNode(rootNode);
}

export default findReactInstanceByRoot;
