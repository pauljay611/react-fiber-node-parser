# React Fiber Node Instance Parser

> A react fiber node instance parser from DOM node to stateful component node

## Who need react fiber node instance parser

1. Need to find out internal react fiber node from dom node
2. Need to check fiber node in a clear and easier way without useless attributes
3. Need to find out react component state and props

## Environment

- Browser
- Node.js

## Installation

Browser
`<script src="react-nip.js"></script>`

```
const reactNip =  window.$__react_nip
```

Node.js

- Npm
  `npm install react-nip`
- Yarn
  `yarn add react-nip`

```
// CommonJS
const reactNip require('react-nip')

// ES6
import reactNip from 'react-nip'
```

## API

### find react fiber node from native dom node

```
findReactInstanceByRoot( domNode:Element ): FiberNode
```

### parse react fiber node to object

```
fiberNodeParser( node:FiberNode ): SimplifiedFiberNode

interface SimplifiedFiberNode {
  type: WorkTag; // see https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactWorkTags.js
  displayName: string;
  children: SimplifiedFiberNode[];
  state: any;
  props: any;
  index: number;
  domNode: string;
}

```
