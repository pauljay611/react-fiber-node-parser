import { Fiber, WorkTag } from "./types";

interface SimplifyFiberNode {
  type: WorkTag;
  displayName: string;
  children: SimplifyFiberNode[];
  state: any;
  props: any;
  context: any;
  index: number;
  domNode: Element;
}

// 找 react instance
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

// fiber node 轉成 => parser
export function findReactFiberNode(fiberNode: Fiber): SimplifyFiberNode {
  return;
}
