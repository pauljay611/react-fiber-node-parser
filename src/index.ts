import findReactInstanceByRoot from "./findReactInstanceByRoot";
import fiberNodeParser from "./fiberNodeParser";

export * from "./findReactInstanceByRoot";
export * from "./fiberNodeParser";

declare global {
  interface Window {
    $__react_nip: any;
  }
}

window.$__react_nip = { findReactInstanceByRoot, fiberNodeParser };
